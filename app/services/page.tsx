import type { Metadata } from "next"
import { ServicesClient } from "./services-client"

export const metadata: Metadata = {
    title: "Our Services",
    description:
        "Comprehensive physiotherapy services including joint & muscle pain management, post-surgical rehabilitation, sports injury treatment, neurological physiotherapy, geriatric care, posture correction, hijama therapy (wet cupping), and acupuncture therapy.",
}

export default function ServicesPage() {
    return <ServicesClient />
}
