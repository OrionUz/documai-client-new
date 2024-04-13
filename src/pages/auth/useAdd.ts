import { Form } from 'antd';
import { useState } from 'react';
import { useAddNewClientMutation } from 'src/app/services/auth';
import { INewClientForm } from 'src/app/services/auth/type';
// import { useModalHeaderClick } from 'src/components/view/modal/useModalHeaderClick';
import { clearMask } from 'src/utils';

export interface IAddProps {
  handleGet?: () => void;
}

export default function useNewClient({
  handleGet,
}: IAddProps) {
  const [form] = Form.useForm<INewClientForm>();

  //Modal visible
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const closeModal = () => {
    setVisible(false);
    form.resetFields();
  };
//   useModalHeaderClick(closeModal);

  //Fetch
  const [add, { isLoading: addLoading }] = useAddNewClientMutation();
  const isLoading = addLoading;

  const onFinish = (val: INewClientForm) => {
    let { phoneNumber, ...rest } = val;
    console.log(val)

    let body = {
      ...rest,
      phoneNumber: '998' + clearMask(val.phoneNumber),
    };
      add(body)
        .unwrap()
        .then(() => onSuccess());

  };

  const onSuccess = () => {
    closeModal();
    handleGet?.();
  };

//   //Set default value
//   useEffect(() => {
//     if (editData) {
//       form.setFieldsValue({
//         first_name: editData.first_name,
//         store: editData.store.id,
//         position: editData.position,
//         phone: makePhoneMask(editData.phone.split('998')[1]),
//         comment: editData.comment,
//       });
//       if (editData.hired_date) {
//         form.setFieldsValue({
//           hired_date: dayjs(editData.hired_date, dateFormat),
//         });
//       }
//       showModal();
//     }
//   }, [editData]);

  return { form, visible, isLoading, showModal, closeModal, onFinish };
}
