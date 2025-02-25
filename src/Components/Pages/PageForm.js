import { useQuery } from '@tanstack/react-query';
import { Form, Formik } from 'formik';
import { useEffect } from 'react';
import FormBtn from '../../Elements/Buttons/FormBtn';
import request from '../../Utils/AxiosUtils';
import { PagesAPI } from '../../Utils/AxiosUtils/API';
import { YupObject, nameSchema } from '../../Utils/Validation/ValidationSchemas';
import Loader from '../CommonComponent/Loader';
import CheckBoxField from '../InputFields/CheckBoxField';
import FileUploadField from '../InputFields/FileUploadField';
import SimpleInputField from '../InputFields/SimpleInputField';
import DescriptionInput from '../Widgets/DescriptionInput';
import { useTranslation } from "react-i18next";
import { useRouter } from 'next/navigation';
import LanguageRedirection from '../CommonComponent/LanguageRedirection';
import { generateSlug } from '@/Utils/CustomFunctions/SlugName';

const PageForm = ({ updateId, mutate, loading, buttonName }) => {
    
    const { t } = useTranslation( 'common');
    const router = useRouter()
    const { data: oldData, isLoading, refetch } = useQuery([`page/id`], () => request({ url: `${PagesAPI}/${updateId}` },router), { enabled: false, select: (data) => data?.data });
    useEffect(() => {
        updateId && refetch();
    }, [updateId]);
    if (updateId && isLoading) return <Loader />;
    return (
        <Formik
            enableReinitialize
            initialValues={{
                title: updateId ? oldData?.title || "" : "",
                slug: updateId ? oldData?.slug || "" : "",
                content: updateId ? oldData?.content || "" : "",
                meta_title: updateId ? oldData?.meta_title || "" : "",
                meta_description: updateId ? oldData?.meta_description || "" : "",
                page_meta_image_id: updateId ? oldData?.page_meta_image_id?.id || "" : "",
                page_meta_image: updateId ? oldData?.page_meta_image || "" : "",
                status: updateId ? Boolean(Number(oldData?.status)) : true,
            }}
            validationSchema={YupObject({
                title: nameSchema
            })}
            onSubmit={(values) => {
                values.status = Number(values.status);
                mutate(values);
            }}>
            {({ values, setFieldValue, errors, touched }) => {
                useEffect(() => {
                    if (values.title && !updateId && !values.slug) {
                    setFieldValue("slug", generateSlug(values.title));
                    }
                }, [values.title, setFieldValue, updateId, values.slug]);
        
            return (
                <>
                    <Form id="blog" className="theme-form theme-form-2 mega-form">
                        {updateId && <LanguageRedirection id={updateId} path={'/page'} />}
                        <SimpleInputField nameList={[
                            { name: "title", placeholder: t("enter_title"), require: "true", value: values.title, onChange: (e) => {setFieldValue("title", e.target.value); if (!updateId) { setFieldValue("slug", generateSlug(e.target.value));}},},
                            { name: "slug", require: "true", placeholder: t("enter_slug"), value: values.slug, onChange: (e) => setFieldValue("slug", e.target.value)},
                            ]} />
                        <DescriptionInput values={values} setFieldValue={setFieldValue} title={'Content'} nameKey="content" />
                        <SimpleInputField nameList={[{ name: "meta_title", title: "meta_title", placeholder: t("enter_meta_title") }, { name: "meta_description", title: "meta_description", placeholder: t("enter_meta_description") }]} />
                        <FileUploadField name="page_meta_image_id" title='meta_image' id="page_meta_image_id" updateId={updateId} type="file" values={values} setFieldValue={setFieldValue} errors={errors} touched={touched} />
                        <CheckBoxField name="status" />
                        <FormBtn loading={Number(loading)} buttonName={buttonName}/>
                    </Form>
                </>
            )}}
        </Formik>
    )
}

export default PageForm