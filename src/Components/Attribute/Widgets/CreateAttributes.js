import SimpleInputField from '../../InputFields/SimpleInputField'
import SearchableSelectInput from '../../InputFields/SearchableSelectInput'
import { variantStyle } from '../../../Data/TabTitleListData'
import { useTranslation } from "react-i18next";
import { generateSlug } from '@/Utils/CustomFunctions/SlugName';

const CreateAttributes = () => {
    
    const { t } = useTranslation( 'common');
    return (
        <>
            <SimpleInputField nameList={[
                { name: "name", placeholder: t("attribute_name"), require: "true",},
            ]} />
            <SearchableSelectInput
                nameList={[
                    {
                        name: "style",
                        title: "style",
                        require: "true",
                        inputprops: {
                            name: "style",
                            id: "style",
                            options: variantStyle,
                            helpertext: "*Choose the desired shape style, such as rectangle or circle. Based on your selection, variant options will be displayed on product page."
                        },
                    },
                ]}
            />
        </>
    )
}

export default CreateAttributes