import styles from './questionCorporateInformation.module.scss'
import { useTranslation } from 'react-i18next';
function QuestionCorporateInformationBody() {
    const {t} = useTranslation()
  return (
    <div className={styles.corporateInformation}>
        <h1>{t("description.part360")}</h1>
        <p>{t("description.part361")}</p>
        <strong>Netflix, Inc.</strong>
        <p>100 Winchester Circle</p>
        <p>Los Gatos, CA 95032, USA</p>
        <strong>Netflix International B.V.</strong>
        <p>Karperstraat 8-10</p>
        <p>1075 KZ Amsterdam, the Netherlands</p>
        <p>KvK: 62266519</p>
        <p>VAT: NL853746333B01</p>
        <p>Share Capital: 12,500 Euros</p>
        <strong>Netflix Entretenimento Brasil, Ltda.</strong>
        <p>Alameda Xingu, 350 - 14º andar - Alphaville Industrial</p>
        <p>Barueri, CEP 06455-911 - SP - Brazil</p>
        <p>CNPJ: ​13.590.585/0002-70</p>
        <strong>Netflix Entertainment Services India LLP</strong>
        <p>Level 11, Godrej BKC, Plot C-68</p>
        <p>G Block, BKC- Bandra (East)</p>
        <p>Mumbai 400051, India</p>
        <strong>Netflix G.K.</strong>
        <p>Tokyo Midtown East 3F</p>
        <p>9-7-2 Akasaka</p>
        <p>Minato-ku</p>
        <p>Tokyo 107-0052 Japan </p>
        <strong>Netflix Services Korea Ltd.</strong>
        <p>20F, Tower A, Centropolis Building</p>
        <p>26, Ujeongguk-ro, Jongno-gu, Seoul, 03161, Republic of Korea</p>
        <strong>Netflix Services UK Limited</strong>
        <p>100 New Bridge Street, London, EC4V 6JA</p>
        <p>Company No (Registration): 9091899</p>
        <p>Income Tax Registration No.: 623 25810 01805 A</p>
        <strong>Netflix Pte. Ltd.</strong>
        <p>9 Straits View, Marina One West Tower #14-07/12, Singapore 018937</p>
        <p>Registration ID No. 201531197W</p>
        <strong>Netflix Services France S.A.S.</strong>
        <p>11 Place Édouard VII, 75009 Paris, France</p>
        <p>Business Number: 843 655 549 RCS Paris</p>
        <strong>Netflix Servicios de Transmisión España, S.L.</strong>
        <p>Paseo de la Castellana 89, 28046 Madrid, Spain</p>
        <p>VAT/NIF number B88182514</p>
        <strong>Netflix México S. de R.L. de C.V.</strong>
        <p>Paseo de la Reforma 483, Piso 37, Col. Cuauhtémoc, Cuauhtémoc, CDMX, CP 06500</p>
        <p>Registration No.: 112483</p>
        <p>RFC (tax ID): NME110513P13</p>
        <strong>Netflix Australia Pty Ltd.</strong>
        <p>Level 19, 181 William Street</p>
        <p>Melbourne VIC 3000, Australia</p>
        <strong>Netflix Services Germany GmbH</strong>
        <p>Friedrichstraße 88</p>
        <p>10117, Berlin, Germany</p>
        <strong>Netflix Services Italy S.R.L.</strong>
        <p>Via Boncompagni no. 8-10, Villino Rattazzi </p>
        <p>00187, Rome, Italy</p>
        <strong>Netflix Services Canada ULC</strong>
        <p>1200 Waterfront Centre, 200 Burrard St</p>
        <p>Vancouver BC V7X 1T2, Canada</p>
        <p><strong>{t("description.part235")}</strong>{t("description.part236")}</p>
    </div>
  )
}

export default QuestionCorporateInformationBody