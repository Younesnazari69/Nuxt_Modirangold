import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

export default defineEventHandler(async (event) => {
  try {
    // ارسال درخواست به API برای دریافت لینک‌ها
    const response = await $fetch('https://new.darbastan.org/api/Seos/SiteMapAll');

    // لاگ کردن پاسخ برای بررسی بیشتر
   // console.log('API Response:', response);

    // بررسی اینکه پاسخ دریافتی از API یک آرایه باشد
    if (!Array.isArray(response)) {
      console.error('API response is not an array');
      event.res.statusCode = 500;
      return { error: 'Invalid API response format' };
    }

    // تعریف آدرس سایت
    const hostname = 'https://darbastan.com';

    // ایجاد SitemapStream برای تولید فایل sitemap XML
    const sitemapStream = new SitemapStream({ hostname });

    // تبدیل لینک‌ها به فرمت مناسب برای Sitemap
    const links = response.map(link => ({
      url: `${hostname}${link.url}`,  // ترکیب URL با دامنه
      lastmod: link.lastmod,
      changefreq: link.changefreq || 'weekly',
      priority: link.priority || 0.5
    }));

    // تولید داده‌های XML از sitemap
    const xmlData = await streamToPromise(Readable.from(links).pipe(sitemapStream));

    // تنظیم Content-Type برای ارسال XML به کلاینت
    event.res.setHeader('Content-Type', 'application/xml');
    
    // ارسال داده‌های XML به کلاینت
    return xmlData.toString();
  } catch (error) {
    console.error('Error generating sitemap:', error);
    event.res.statusCode = 500;
    return { error: 'Failed to generate sitemap' };
  }
});
