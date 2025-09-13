import { useProfileStore } from "~/stores/profile";
// import { useI18n } from 'vue-i18n';

// const { locale } = useI18n();
const savedLang = 'en';

export default function authFetch(url, options = {}) {
  const token = useProfileStore().token;
  const config = useRuntimeConfig();
  const baseUrl = config.public.baseUrl;
  const fullUrl = `${baseUrl}${url}`;
  return $fetch(fullUrl, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...(savedLang && { 'Accept-Language': savedLang }),
    },
    onResponseError({ response }) {
      if (response.status === 401) {
        // navigateTo(cachedSiteData.value.login_url + `?location=${window?.location?.pathname}`, {
        //   external: true,
        // });

        // console.log("error 401",response)
      }
    },
  });
}
