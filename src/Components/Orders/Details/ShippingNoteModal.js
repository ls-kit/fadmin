import ShowModal from "@/Elements/Alerts&Modals/Modal";
import Btn from "@/Elements/Buttons/Btn";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import SimpleInputField from "@/Components/InputFields/SimpleInputField";
const ShippingNoteModal = ({ open, setOpen, data, note ,setFieldValue,orderStatusUpdate,values, moduleName, orderStatusData, setOrderStatus, orderStatus, mutate, edit}) => {

    
    const { t } = useTranslation( 'common');


    const submit = () => {
        setOpen(false)
        

        mutate({
            _method: "put",
            order_status_id: values,
            note:""
        })
    }
    useEffect(() => {
        if (orderStatusUpdate?.status == 200 || orderStatusUpdate?.status == 201) {
            setOrderStatus(values['order_status_id'])
        }
    }, [orderStatusUpdate])
    return (
        <ShowModal
            open={true}
            modalAttr={{ className: "theme-modal  invoice-modal" }}
            buttons={
                <div className="modal-btn-group d-flex align-items-center gap-2 justify-content-center">
                    <Btn className="btn-sm btn-animation theme-bg-color" onClick={() => { setOpen(false) }}>{t("cancel")}</Btn>
                    <Btn className="btn-sm btn-outline" onClick={submit}>{t("submit")}</Btn>
                </div>
            }
        >
            <h5 class="modal-title text-center">{ t('shipping_note')  }</h5>
            <div class="mb-4 mt-2">
              <SimpleInputField nameList={[{ name: "note", title: "store_description",notitle:"true", rows:"3", type: "textarea", placeholder: t("EnterDescription(optional)"), require: "true" }]} />
            </div>
        </ShowModal>
    )
}

export default ShippingNoteModal;