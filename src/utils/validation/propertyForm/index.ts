import * as yup from 'yup';

const cellphoneRegExp = /^\(\d{2}\)\d{5}-\d{4}$/;

export const useValidationForm = () => {
  return yup.object({
    imageUrls: yup.array(yup.string()),
    rooms: yup.number().required('Informe o total de quartos'),
    typeHouse: yup.string().required('Informe o tipo do imóvel'),
    bathroom: yup.number().required('Informe o total de banheiros'),
    garage: yup.number().required('Informe o total de vagas / garagens'),
    address: yup.string().trim().required('Informe o enderenço do imóvel'),
    rented: yup.string().trim().required('Informe como o status do imóvel'),
    neighborhood: yup.string().trim().required('Informe o bairro do imóvel'),
    contactName: yup.string().trim().required('Informe o nome do proprietário'),
    area: yup
      .number()
      .typeError('Informe a área em m²')
      .required('Infome a área em m²'),
    price: yup
      .number()
      .typeError('Informe o preço')
      .required('Informe o preço'),
    newHouse: yup
      .string()
      .trim()
      .required('Informe se o imóvel é novo ou usado'),
    comment: yup
      .string()
      .trim()
      .required('Informe um comentário / detalhe do imóvel'),
    contactEmail: yup
      .string()
      .trim()
      .email('E-mail inválido')
      .required('Informe o E-mail do proprietário'),
    contactAddress: yup
      .string()
      .trim()
      .required('Informe o enderenço do proprietário'),
    contactPhone: yup
      .string()
      .trim()
      .required('Informe o telefone do proprietário')
      .test('is-telephone', 'Número de telefone inválido', (value = '') => {
        if (!value.length) return true;

        return cellphoneRegExp.test(value.replace(' ', ''));
      }),
  });
};
