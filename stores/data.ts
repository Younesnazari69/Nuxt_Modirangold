import { ref } from 'vue'
import { defineStore } from 'pinia'
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import ApiService from '../services/ApiService'
import JwtService from '../services/JwtService'

export const useDataStore = defineStore('data', () => {
  const errors = ref({})
  const MetaTags = ref<any>({
    Title: 'مرجع طلا  ایران - مدیران گلد',
    description: 'مدیران گلد مرجع خرید و فروش و نصب و اجاره طلا  ایران؛تجربه ای ماندگار و لذت بخش در صنعت طلا  ایران برای كلیه ذینفعان داخلی و خارجی',
    Keywords: 'طلا,طلا جدید,طلا تهران,طلا ارزان,طلا ,قیمت طلا,نصب طلا,اجاره طلا',
    OgTitle: 'مدیران گلد',
    OgDescription: 'مرجع طلا ایران | تجربه ای ماندگار و لذت بخش در صنعت طلا ایران برای كلیه ذینفعان داخلی و خارجی ، طلا  نوین',
    OgUrl: 'https://www.darbastan.com/',
    OgImage: 'https://darbastan.storage.c2.liara.space/Images/logo.png',
    Canonical: 'https://www.darbastan.com/'
  })
  const MenuActive = ref<any>({
    MenuTitle:null,
    ParentTitle:null
  })
  const CurrentUserData = ref<any>(null)


  const PagesData = ref<any>({ Page: null, List: null })
  const TopicByParamData = ref<any>({ Topic: null, List: null })
  const PageCommentsData = ref<any>({ Comment: null, List: null })
  const TopicsData = ref<any>({ Topic: null, List: null })
  const SearchResultData = ref<any>(null)

  const OstanData = ref<any>({ Ostan: null, List: null })
  const CityData = ref<any>({ City: null, List: null })

  const CountryData = ref<any>({ Country: null, List: null })
  const CityWorldData = ref<any>({ CityWorld: null, List: null })

  const CompanyUserData = ref<any>({ User: null, List: null })
  const UserCompanyByParamData = ref<any>({ User: null, List: null })
  const UserCategoriesData = ref<any>({ UserCategory: null, List: null })

  const UsersAllAdminData = ref<any>({ UserAllAdminData: null, List: null })
  const ScaffoldersRegisterAdminData = ref<any>({ ScaffolderRegisterAdminData: null, List: null })
  const BlogsAdminData = ref<any>({ BlogAdminData: null, List: null })

  const UserByParamData = ref<any>({ UserByParam: null, List: null })

  
  const CustomersSatisfactionData = ref<any>({ CustomerSatisfactionData: null, List: null })

  function setError(error: any) {
    errors.value = { ...error }
  }
  const SetMetaTags = async (Title: any, description: any, Keywords: any, OgTitle: any, OgDescription: any, OgUrl: any, OgImage: any, Canonical: any) => {
    debugger
    MetaTags.value.Title = Title;
    MetaTags.value.description = description;
    MetaTags.value.Keywords = Keywords;
    MetaTags.value.OgTitle = OgTitle
    MetaTags.value.OgDescription = OgDescription
    MetaTags.value.OgUrl = OgUrl
    MetaTags.value.OgImage = OgImage
    MetaTags.value.Canonical = Canonical
  }

  function SetMenuActive(data: any) {
    MenuActive.value.MenuTitle=data.MenuTitle;
    MenuActive.value.ParentTitle = data.ParentTitle;
  }

  const normalizeString = (str: string) => {
    // جایگزینی "ی" عربی با "ی" فارسی
    return str.replace(/[\u06CC]/g, '\u064A').normalize('NFKC').toLowerCase().trim();
  };





  const FetchPages = async (TakeNumber: number, PageNumber: number) => {
    return await ApiService.get(`/Pages/GetPagesAll?takenumber=${TakeNumber}&pagenumber=${PageNumber}`)
      .then((res) => {
        PagesData.value.List = res.data.data
        errors.value = res.data.errors
        return res.data;

      }
      )
      .catch(({ response }) => {
        ApiService.svc.showError("اخطار", response.data)
      });
  }

  const FetchPage = async (PageID: number) => {
    const data = {
      "id": PageID
    }
    return await ApiService.post(`/Pages/GetPagesByParam`, data)
      .then((res) => {
        debugger
        PagesData.value.Page = res.data.data[0];
        errors.value = res.data.errors;
        return res.data;
      }
      )
      .catch(({ response }) => {
        ApiService.svc.showError("اخطار", response.data)
      })

  }

  const FetchPageCommentByParam = async (PageID: number) => {
    return await ApiService.get(`/Pages/GetCommentByParam?pageid=${PageID}`)
      .then((res) => {
        PageCommentsData.value.List = res.data.data;
        errors.value = res.data.errors
        return res.data;
      }
      )
      .catch(({ response }) => {
        ApiService.svc.showError("اخطار", response.data)
      });

  }

  //#region Ostan , City
  const FetchOstan = async () => {
    return await ApiService.get(`/Locations/GetOstanAll`)
      .then((res) => {
        OstanData.value.List = res.data.data;
        errors.value = res.data.errors
        return res.data;
      }
      )
      .catch(({ response }) => {
        ApiService.svc.showError("اخطار", response.data)
      });

  }

  const FetchCity = async (OstanId: number) => {
    return await ApiService.get(`/Locations/GetCitiesAll?ostanid=${OstanId}`)
      .then((res) => {
        CityData.value.List = res.data.data;
        errors.value = res.data.errors
        return res.data;
      }
      )
      .catch(({ response }) => {
        ApiService.svc.showError("اخطار", response.data)
      });

  }
  //#endregion Ostan , City



  //#region Countries , City
  const FetchCountries = async () => {
    return await ApiService.get(`/Locations/GetCountriesAll`)
      .then((res) => {
        CountryData.value.List = res.data.data;
        errors.value = res.data.errors
        return res.data;
      }
      )
      .catch(({ response }) => {
        ApiService.svc.showError("اخطار", response.data)
      });

  }

  const FetchCitiesWorld = async (countryname: string) => {
    return await ApiService.get(`/Locations/GetCitiesWorldAll?countryname=${countryname}`)
      .then((res) => {
        CityWorldData.value.List = res.data.data;
        errors.value = res.data.errors
        return res.data;
      }
      )
      .catch(({ response }) => {
        ApiService.svc.showError("اخطار", response.data)
      });

  }
  //#endregion Countries , City



  //#region Create mobile Scaffolding
  const CreateMobileScaffolding = async (dataToSend: any) => {
    debugger
    return await ApiService.post(`/Requests/CreateRequestMoblieScaffolding`, dataToSend)
      .then((res) => {
        if (res != null) {
          return res.data
        }
      })
      .catch(({ response }) => {
        debugger
        ApiService.svc.showError("اخطار", response.data)
      })
  }
  //#endregion 

  const CreateCommentsForPage = async (CreateCommentsForPage: any) => {

    return await ApiService.post(`/Pages/CreateComments`, CreateCommentsForPage)
      .then((res) => {
        if (res != null) {
          return res.data
        }
      })
      .catch(({ response }) => {
        ApiService.svc.showError("اخطار", response.data)
      })
  }



  //#region Contact

  const CreateContact = async (CreateContact: any) => {
    return await ApiService.post(`/DarbastanServices/CreateContact`, CreateContact)
      .then((res) => {
        if (res != null) {
          return res.data
        }
      })
      .catch(({ response }) => {
        ApiService.svc.showError("اخطار", response.data)
      })
  }

  //#endregion Contact

  //#region Email Register

  const EmailRegister = async (EmailRegister: any) => {

    return await ApiService.post(`/Requests/EmailRegister`, EmailRegister)
      .then((res) => {
        if (res != null) {
          return res.data
        }
      })
      .catch(({ response }) => {
        ApiService.svc.showError("اخطار", response.data)
      })
  }

  //#endregion Email  Register



 //#region  DarbastanServices

  const GetScaffoldPriceAll = async (data: any) => {

    return await ApiService.post(`/DarbastanServices/GetScaffoldPriceAll`, data)
      .then((res) => {
        if (res != null) {
          return res.data
        }
      })
      .catch(({ response }) => {
        ApiService.svc.showError("اخطار", response.data)
      })
  }


  const GetCustomerSatisfactionAll = async () => {
    return await ApiService.get(`/DarbastanServices/GetCustomerSatisfactionAll`)
      .then((res) => {
        CustomersSatisfactionData.value.List = res.data.data
        errors.value = res.data.errors
        return res.data;
      }
      )
      .catch(({ response }) => {
        ApiService.svc.showError("اخطار", response.data)
      });
  }

  const CreateCustomerSatisfaction = async (data: any) => {
    return await ApiService.post(`/DarbastanServices/CreateCustomerSatisfaction`, data)
      .then((res) => {
        errors.value = res.data.errors
        return res.data;
      }
      )
      .catch(({ response }) => {
        if (response.status == 429) {
          ApiService.svc.showError("اخطار", "تعداد درخواست شما بیش از حد مجاز می باشد لطفا 1 دقیقه بعد تلاش نمایید")
        } else {
          ApiService.svc.showError("اخطار", response.data)
        }

      });
  }





//#endregion DarbastanServices


  //#region  Topics

  const FetchTopics = async (TakeNumber: number, PageNumber: number) => {
    return await ApiService.get(`/Topics/GetTopicsAll?takenumber=${TakeNumber}&pagenumber=${PageNumber}`)
      .then((res) => {
        TopicsData.value.List = res.data.data;
        errors.value = res.data.errors;
        return res.data;
      }
      )
      .catch(({ response }) => {
        ApiService.svc.showError("اخطار", response.data)
      });
  }


  const FetchTopicByParam = async (TopicId: number) => {
    const data = {
      "id": TopicId
    }
    return await ApiService.post(`/Topics/GetTopicsByParam`, data)
      .then((res) => {
        TopicByParamData.value.Topic = res.data.data[0];
        errors.value = res.data.errors;
        return res.data;
      }
      )
      .catch(({ response }) => {
        ApiService.svc.showError("اخطار", response.data)
      })

  }


  //#endregion Topics



  //#region  Search

  const FetchSearch = async (word: string | any) => {
    SearchResultData.value = null;

    return await ApiService.get(`/Pages/Search?search=${word}`,)
      .then((res) => {
        SearchResultData.value = res.data;
        errors.value = res.data.errors;
        return res.data;
      }
      )
      .catch(({ response }) => {
        ApiService.svc.showError("اخطار", response.data)
      });
  }

  //#endregion Search

  //#region User Controller
  const currentUser = () => {
    // if (typeof window !== 'undefined') {
    const access_token = JwtService.getToken();
    if (access_token == null) return null;
    try {
      const jwtPayload: any = jwtDecode(access_token);
      if (jwtPayload.exp >= Date.now() / 1000) {
        const User = {
          UserId: jwtPayload.UserId,
          UserName: jwtPayload.UserName,
          UserType: jwtPayload.UserType,
          exp: jwtPayload.exp,
        }
        CurrentUserData.value = User;
        return User;
      }
    } catch (e) {
      console.error(e);
    }
    // }
    //JwtService.destroyToken();
    return null;

  }
  const GetUserCategoriesAll = async () => {
    return await ApiService.get(`/Users/GetUserCategoriesAll`)
      .then((res) => {
        UserCategoriesData.value.List = res.data.data
        errors.value = res.data.errors
        return res.data;
      }
      )
      .catch(({ response }) => {
        ApiService.svc.showError("اخطار", response.data)
      });
  }

  const RegisterMobile = async (data: any) => {
    return await ApiService.post(`/Users/RegisterMobile`, data)
      .then((res) => {
        errors.value = res.data.errors
        return res.data;
      }
      )
      .catch(({ response }) => {
        if (response.status == 429) {
          ApiService.svc.showError("اخطار", "تعداد درخواست شما بیش از حد مجاز می باشد لطفا 2 دقیقه بعد تلاش نمایید")
        } else {
          ApiService.svc.showError("اخطار", response.data)
        }

      });
  }
  const VerifyMobile = async (data: any) => {
    return await ApiService.get(`/Users/VerifyPhoneNumber?Code=${data.Code}&PhoneNumber=${data.PhoneNumber}`)
      .then((res) => {
        errors.value = res.data.errors
        return res.data;
      }
      )
      .catch(({ response }) => {
        ApiService.svc.showError("اخطار", response.data)
      });
  }
  const Login = async (data: any) => {
    return await ApiService.post(`/Authentication/Login`, data)
      .then((res) => {
        if (res.data.data != null) {
          JwtService.saveToken(res.data.data.token)
        }
        errors.value = res.data.errors
        return res.data;
      }
      )
      .catch(({ response }) => {
        if (response.status == 429) {
          ApiService.svc.showError("اخطار", "تعداد درخواست شما بیش از حد مجاز می باشد لطفا 2 دقیقه بعد تلاش نمایید")
        } else {
          ApiService.svc.showError("اخطار", response.data)
        }

      });
  }
  const ForgotPassword = async (data: any) => {
    debugger
    return await ApiService.post(`/Authentication/ForgotPassword`, data)
      .then((res) => {
        errors.value = res.data.errors
        return res.data;
      }
      )
      .catch(({ response }) => {
        if (response.status == 429) {
          ApiService.svc.showError("اخطار", "تعداد درخواست شما بیش از حد مجاز می باشد لطفا 2 دقیقه بعد تلاش نمایید")
        } else {
          ApiService.svc.showError("اخطار", response.data)
        }

      });
  }
  const ResetPassword = async (data: any) => {
    return await ApiService.post(`/Authentication/ResetPassword`, data)
      .then((res) => {
        errors.value = res.data.errors
        return res.data;
      }
      )
      .catch(({ response }) => {
        if (response.status == 429) {
          ApiService.svc.showError("اخطار", "تعداد درخواست شما بیش از حد مجاز می باشد لطفا 2 دقیقه بعد تلاش نمایید")
        } else {
          ApiService.svc.showError("اخطار", response.data)
        }

      });
  }



  const logout = async () => {
    // return await ApiService.post(`/Authentication/logout`, data)
    // .then((res) => {
    //   JwtService.saveToken(res.data.data.token)
    //   errors.value = res.data.errors
    //   return res.data;
    // }
    // )
    // .catch(({ response }) => {
    //   if (response.status == 429) {
    //     ApiService.svc.showError("اخطار", "تعداد درخواست شما بیش از حد مجاز می باشد لطفا 2 دقیقه بعد تلاش نمایید")
    //   } else {
    //     ApiService.svc.showError("اخطار", response.data)
    //   }

    // });
  }


  const FetchCompanyUsersAll = async (TakeNumber: number, PageNumber: number, OstanId: number) => {
    return await ApiService.get(`/Users/GetCompanyProfileAll?takenumber=${TakeNumber}&pagenumber=${PageNumber}&ostanid=${OstanId}`)
      .then((res) => {
        debugger
        CompanyUserData.value.List = res.data.data
        errors.value = res.data.errors
        return res.data;
      }
      )
      .catch(({ response }) => {
        ApiService.svc.showError("اخطار", response.data)
      });
  }


  const FetchUserCompanyByParam = async (Id: string) => {
    const data = {
      "id": Id
    }
    return await ApiService.post(`/Users/GetUserCompanyByParam`, data)
      .then((res) => {
        UserCompanyByParamData.value.User = res.data.data[0];
        errors.value = res.data.errors;
        return res.data;
      }
      )
      .catch(({ response }) => {
        ApiService.svc.showError("اخطار", response.data)
      })

  }

  const FetchUserByParam = async (Id: string) => {
    return await ApiService.get(`/Users/GetUserByParam?Id=${Id}`)
      .then((res) => {
        UserByParamData.value.UserByParam = res.data.data[0];
        errors.value = res.data.errors
        return res.data;
      }
      )
      .catch(({ response }) => {
        debugger
        ApiService.svc.showError("اخطار", response.data)
      });

  }

  const UpdateProfileForUser = async (UserUpdateProfile: any) => {
    return await ApiService.post(`/Users/UpdateUsers`, UserUpdateProfile)
      .then((res) => {
        if (res != null) {
          return res.data
        }
      })
      .catch(({ response }) => {
        ApiService.svc.showError("اخطار", response.data)
      })
  }

  //#endregion User Controller

  //#region Admin Api

  const GetUserAllAdmin = async () => {
    return await ApiService.get(`/Users/GetUserAllAdmin`)
      .then((res) => {
        UsersAllAdminData.value.List = res.data.data
        errors.value = res.data.errors
        return res.data;
      }
      )
      .catch(({ response }) => {
        ApiService.svc.showError("اخطار", response.data)
      });
  }

  const GetScaffolderRegisterAdmin = async () => {
    return await ApiService.get(`/Users/GetScaffolderRegisterAdmin`)
      .then((res) => {
        ScaffoldersRegisterAdminData.value.List = res.data.data
        errors.value = res.data.errors
        return res.data;
      }
      )
      .catch(({ response }) => {
        ApiService.svc.showError("اخطار", response.data)
      });
  }

  const GetBlogsAdmin = async () => {
    return await ApiService.get(`/Pages/GetAllBlogs`)
      .then((res) => {
        BlogsAdminData.value.List = res.data.data
        errors.value = res.data.errors
        return res.data;
      }
      )
      .catch(({ response }) => {
        ApiService.svc.showError("اخطار", response.data)
      });
  }

  //#endregion Admin Api



  //#region FileUpload


  const CreateScaffolderResume = async (dataToSend: any) => {
    debugger
    return await ApiService.post(`/Requests/CreateScaffolderResume`, dataToSend)
      .then((res) => {
        if (res != null) {
          return res.data
        }
      })
      .catch(({ response }) => {
        debugger
        if (response.status == 429) {
          ApiService.svc.showError("اخطار", "تعداد درخواست شما بیش از حد مجاز می باشد لطفا 2 دقیقه بعد تلاش نمایید")
        } else {
          ApiService.svc.showError("اخطار", response.data)
        }
      })
  }


  async function uploadFiles(uploadFile: any, fileTypeId: string) {
    debugger
    if (!uploadFile) {
      console.error('فایل ارسال نشده است!');
      return;
    }

    const formData = new FormData();
    formData.append('file', uploadFile);

    const errorMessages = {
      'cv': 'خطا رزومه',
      'default': 'خطا در آپلود فایل'
    };
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };

      // ارسال فایل با استفاده از ApiService.post
      return await ApiService.postwithConfig(`/FileArchive/UploadFile`, formData,config)
      .then((res) => {
        if (res != null) {
          return res.data
        }
      })
      .catch(({ response }) => {
        debugger
        if (response.status == 429) {
          ApiService.svc.showError("اخطار", "تعداد درخواست شما بیش از حد مجاز می باشد لطفا 2 دقیقه بعد تلاش نمایید")
        } else {
          ApiService.svc.showError("اخطار", response.data)
        }
      })
  }






  const fetchFileByGUIDFile = async (GUID: string) => {
    return await ApiService.postwithConfig(
      '/FileArchive/GetFileByGUIDFile',
      { id: GUID },
      {
        headers: {
          'Content-Type': 'application/json',  // تنظیم هدر Content-Type
        },
        responseType: 'blob',  // درخواست برای دریافت فایل به صورت blob
      }
    )
    .then((res) => {
      debugger
      if (res && res.data) {
        const fileType = res.headers['content-type'];
        const blob = new Blob([res.data], { type: fileType });
        const url = URL.createObjectURL(blob);
        return { url, fileType }
      }
    }
    )
    .catch(({ response }) => {
      ApiService.svc.showError("اخطار", response.data)
    });
  };

  const deleteFileByGUID = async (GUID: string) => {
    try {
      const response = await ApiService.post('/FileArchive/DeleteFileByGUID', { id: GUID });

      if (response && response.data) {
        return response.data;  // بازگشت داده‌های پاسخ
      }
    } catch (error) {
      //const errorMessage = error?.response?.data?.errors || error.message || 'خطای ناشناخته';
      // setError(errorMessage);  // نمایش پیام خطا
    }
  };

  //#endregion FileUploads


  return {
    errors,
    MenuActive,
    SetMenuActive,
    MetaTags,
    SetMetaTags,
    normalizeString,
    FetchPages,
    FetchPage,
    FetchPageCommentByParam,
    FetchUserCompanyByParam,
    FetchTopics,
    FetchTopicByParam,
    FetchCompanyUsersAll,
    CreateCommentsForPage,
    CreateMobileScaffolding,
    CreateContact,
    EmailRegister,
    GetScaffoldPriceAll,
    PagesData,
    CompanyUserData,
    PageCommentsData,
    TopicsData,
    TopicByParamData,
    UserCompanyByParamData,
    GetUserCategoriesAll,
    UserCategoriesData,
    GetUserAllAdmin,
    UsersAllAdminData,
    RegisterMobile,
    VerifyMobile,
    Login,
    ForgotPassword,
    ResetPassword,
    currentUser,
    CurrentUserData,
    FetchSearch,
    FetchOstan,
    OstanData,
    CityData,
    FetchCity,
    SearchResultData,
    CountryData,
    CityWorldData,
    FetchCountries,
    uploadFiles,
    fetchFileByGUIDFile,
    deleteFileByGUID,
    CreateScaffolderResume,
    GetScaffolderRegisterAdmin,
    ScaffoldersRegisterAdminData,
    GetBlogsAdmin,
    BlogsAdminData,
    GetCustomerSatisfactionAll,
    CustomersSatisfactionData,
    CreateCustomerSatisfaction,
    FetchUserByParam,
    UserByParamData,
    UpdateProfileForUser,
    FetchCitiesWorld


  }
})
