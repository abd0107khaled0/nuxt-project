import  {useProfileStore} from "~/stores/profile";

export default function useAuthFetch(url, options = {}) {
  // 1. استدعاء الدالة بشكل صحيح للحصول على الـ store
  const { token } = useProfileStore();
  const config = useRuntimeConfig();
  const baseUrl = config.public.baseUrl;
  const fullUrl = `${baseUrl}${url}`;

  // console.log("token",token)

  return $fetch(fullUrl, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    onResponseError({ response }) {
      if (response.status === 401) {
        // console.log('error 401', response);
      }
      if (response.status === 500) {
        // console.log('server error');
        navigateTo('/');
      }
    },
  });
}