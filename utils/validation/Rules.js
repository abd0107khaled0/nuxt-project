import { useI18n } from 'vue-i18n';
const Rules = () => {
  const { t } = useI18n();
  return {
    required: (value: unknown) => !!value || t('Thisfieldisrequired'),

    requiredArray: (value: string | unknown[]) => value.length > 0 || t('Thisfieldisrequired'),

    email: (value: string) => {
      if (!value) return;
      const pattern = /^[\w.-]+@([\w-]+\.)+[\w-]{2,}$/;
      return pattern.test(value) || t('Emailmustbevalid');
    },

    password: (value: string) => {
      if (!value) return;
      const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return (
        pattern.test(value) ||
        t('Passwordmustcontainadigitlowercaseuppercasespecialcharacterandnospace')
      );
    },

    oneDigitAtLest: (value: string) => {
      if (!value) return;
      const pattern = /(?=.*?\d)/;
      return pattern.test(value) || t('Passwordmustcontainatleastonedigit');
    },

    oneLowercaseAtLest: (value: string) => {
      if (!value) return;
      const pattern = /(?=.*?[a-z])/;
      return pattern.test(value) || t('Passwordmustcontainatleastonelowercaseletter');
    },

    oneUppercaseAtLest: (value: string) => {
      if (!value) return;
      const pattern = /(?=.*?[A-Z])/;
      return pattern.test(value) || t('Passwordmustcontainatleastoneuppercaseletter');
    },

    oneSpecialCharacterAtLest: (value: string) => {
      if (!value) return;
      const pattern = /(?=.*?[#?!@$%^&*-])/;
      return pattern.test(value) || t('Passwordmustcontainatleastonespecialcharacter');
    },

    noSpace: (value: string) => {
      if (!value) return;
      return !value.includes(' ') || t('Passwordmustnotcontainspaces');
    },

    max_length: (
      value: string | unknown[],
      length: number,
      isArr: { type: boolean; default: false }
    ) => {
      return (
        value.length <= length ||
        t('Fieldmustbelessthanlengthtype', {
          length,
          type: isArr ? t('items') : t('characters'),
        })
      );
    },

    min_length: (
      value: string | unknown[],
      length: number,
      isArr: { type: boolean; default: false }
    ) => {
      return (
        value?.length >= length ||
        t('Fieldmustbeatleastlengthtype', {
          length,
          type: isArr ? t('items') : t('characters'),
        })
      );
    },

    numeric_phone: (value: string) => {
      const plainValue = value.replaceAll('+', '').replaceAll(' ', '');
      return /^\d+$/.test(plainValue) || t('Pleaseusenumbersonly');
    },

    url: (value: string) => {
      const plainValue = value ? value.replaceAll(' ', '') : '';
      if (plainValue != '') {
        const urlPattern =
          /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[-a-zA-Z0-9@:%_+.~#?&/=]*)?$/;
        return urlPattern.test(plainValue) || t('URLmustbevalid');
      }
      return true;
    },

    phone: (value: unknown) => {
      return value ? true : t('Enteravalidphonenumber');
    },

    firstName: (value: string) => {
      const pattern = /^[\p{L}\s]+$/u;
      if (!value) return t('Firstnameisrequired');
      return pattern.test(value) || t('Firstnamemustnotcontainnumbersorspecialcharacters');
    },

    lastName: (value: string) => {
      const pattern = /^[\p{L}\s]+$/u;
      if (!value) return t('Lastnameisrequired');
      return pattern.test(value) || t('Lastnamemustnotcontainnumbersorspecialcharacters');
    },

    product: (value: string) => {
      return value ? true : t('Productisrequired');
    },

    message: (value: string) => {
      if (!value) return t('Messageisrequired');
      if (value.length > 500) return t('Messagemustnotexceed500characters');
      return true;
    },
    mustBeGreaterThanZero: (value: number) => {
      return value > 0 || t('MustBeGreaterThanZero');
    },

    mustBeInteger: (value: any) => {
      return Number.isInteger(Number(value)) || t('MustBeInteger');
    },

    minRequestPrice: (value: number) => {
      return value >= 0.1 || t('MinRequestPriceError');
    },

    // when return message validation
    validationMessageKey: (value: unknown, messageKey: string) => !!value || t(messageKey),

    ibanSaudiFormat: (value: string) => {
      const pattern = /^SA\d{22}$/;
      return pattern.test(value) || t('InvalidIBANFormat');
    },

    numberOfRequests(value: number) {
      if (value < 10) {
        return t('TheMinimumAllowedIs10Requests');
      }
      if (!Number.isInteger(Number(value))) {
        return t('NumberOfRequestsMustBeInteger');
      }
      return true; // valid
    },

    monthlyLimitValidation: (monthlyLimit: number, numberOfRequest: number) => {
      if (!Number(monthlyLimit) || Number(monthlyLimit) <= 0) {
        return t('TheMonthlyLimitMustBeaPositiveInteger');
      }

      if (Number(monthlyLimit) > Number(numberOfRequest)) {
        // console.log(Number(monthlyLimit) > Number(numberOfRequest));
        return `${t('TheMonthlyLimitMustBeLessThanOrEqualTo')} ${numberOfRequest} ${t('request')}${numberOfRequest === 1 ? '' : ''}`;
      }

      return true;
    },

    nameOnCard(value: string) {
      if (
        !value ||
        !/^[a-zA-Z\s]+$/.test(value.trim()) || // حروف ومسافات فقط
        value.trim().split(/\s+/).length < 2 // لازم كلمتين أو أكثر
      ) {
        return t('NameOnCardMustBeAtLeastTwoWords');
      }

      return true;
    },

    cardNumber(value: string) {
      if (!value || !/^\d{13,19}$/.test(value)) {
        return t('CardNumberMustBeValid'); // رقم البطاقة لازم يكون بين 13 و 19 رقم
      }
      return true;
    },

    expMonth(value: string | number, year: unknown) {
      const month = Number(value);
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1; // 0-based to 1-based

      const inputYear = Number(year);

      if (!month || month < 1 || month > 12) {
        return t('MonthMustBeBetween1And12');
      }

      if (!inputYear || isNaN(inputYear)) {
        return true;
      }

      if (inputYear === currentYear && month < currentMonth) {
        return t('MonthMustNotBeInPast');
      }

      // if (inputYear < currentYear) {
      //   return t('YearIsInPast');
      // }

      return true;
    },

    expYear(value: string | number, month: unknown) {
      const year = Number(value);
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1;

      const inputMonth = Number(month);

      if (!year || isNaN(year) || String(year).length !== 4) {
        return t('YearMustBeValid');
      }

      if (year < currentYear) {
        return t('YearMustBeCurrentOrFuture');
      }

      // if (year === currentYear && inputMonth && inputMonth < currentMonth) {
      //   return t('MonthMustNotBeInPast');
      // }

      return true;
    },

    cvc(value: string) {
      if (!value || !/^\d{3,4}$/.test(value)) {
        return t('CVCMustBe3or4Digits');
      }
      return true;
    },
  };
};
export default Rules;
