import { VacansyPage } from "@/components/Modules/Vacansy/VacansyPage/VacansyPage";
import Layout from "./layout";
import { LeadForm } from "@/components/Modules/LeadForm/LeadForm";

export default function All() {
    return (<Layout>
        <VacansyPage />
        <LeadForm />
    </Layout>)
}
