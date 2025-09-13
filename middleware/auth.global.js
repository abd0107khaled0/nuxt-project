export default defineNuxtRouteMiddleware((to, from) => {
  const { token } = useProfileStore()
  
  // لو مفيش token ومش في صفحة تسجيل الدخول
  if (!token && to.path !== '/') {
    return navigateTo('/')
  }


})