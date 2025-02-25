export const StoreInitialValue = (updateId, oldData) => {
    return {
        store_name: updateId ? oldData?.store_name || "" : "",
        slug: updateId ? oldData?.slug || "" : "",
        description: updateId ? oldData?.description || "" : "",
        country_id: updateId ? oldData?.country?.id || "" : "",
        state_id: updateId ? oldData?.state?.id || "" : "",
        city: updateId ? oldData?.city || "" : "",
        address: updateId ? oldData?.address || "" : "",
        pincode: updateId ? oldData?.pincode || "" : "",
        name: updateId ? oldData?.vendor?.name || "" : "",
        email: updateId ? oldData?.vendor?.email || "" : "",
        password: "",
        password_confirmation: "",
        store_logo_id: updateId ? oldData?.store_logo?.id || "" : undefined,
        store_logo: updateId ? oldData?.store_logo || "" : "",
        store_cover: updateId ? oldData?.store_cover || "" : "",
        hide_vendor_email: updateId ? Boolean(Number(oldData?.hide_vendor_email)) : false,
        hide_vendor_phone: updateId ? Boolean(Number(oldData?.hide_vendor_phone)) : false,
        phone: updateId ? oldData?.vendor?.phone || "" : "",
        status: updateId ? Boolean(Number(oldData?.status)) : true,
        country_code: updateId ? oldData?.vendor?.country_code || "" : "91",
        facebook: updateId ? oldData?.facebook || "" : "",
        pinterest: updateId ? oldData?.pinterest || "" : "",
        instagram: updateId ? oldData?.instagram || "" : "",
        twitter: updateId ? oldData?.twitter || "" : "",
        youtube: updateId ? oldData?.youtube || "" : "",
    }
}