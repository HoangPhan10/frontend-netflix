import { useTranslation } from 'react-i18next';

function LoginPage(){
    const { t} = useTranslation()
    return (
        <div>{t("description.part5")}</div>

    )
}
export default LoginPage;