import type { Metadata } from "next"
import { BookingForm } from "@/components/booking-form"

export const metadata: Metadata = {
    title: "Book Appointment",
    description:
        "Book an appointment at CSPP for personalized physiotherapy care. Fill out the form and we will contact you to confirm your appointment.",
}

export default function BookingPage() {
    return (
        <div className="min-h-screen">
            <BookingForm />
        </div>
    )
}
