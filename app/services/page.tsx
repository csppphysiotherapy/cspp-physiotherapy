import type { Metadata } from "next"
import { ServicesClient } from "./services-client"

export const metadata: Metadata = {
    title: "Our Services",
    description:
        "Comprehensive physiotherapy services including joint & muscle pain management, post-surgical rehabilitation, sports injury treatment, neurological physiotherapy, geriatric care, and posture correction.",
}

export default function ServicesPage() {
    return <ServicesClient />
}
