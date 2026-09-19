import { Route, Routes } from "react-router-dom"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { ScrollToTop } from "@/components/site/scroll-to-top"
import { HomePage } from "@/pages/home"
import { ServicesPage } from "@/pages/services"
import { WorkIndexPage } from "@/pages/work-index"
import { WorkDetailPage } from "@/pages/work-detail"
import { AboutPage } from "@/pages/about"
import { ContactPage } from "@/pages/contact"
import { PrivacyPolicyPage } from "@/pages/legal/privacy-policy"
import { TermsOfServicePage } from "@/pages/legal/terms-of-service"
import { NotFoundPage } from "@/pages/not-found"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<WorkIndexPage />} />
          <Route path="/work/:slug" element={<WorkDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/legal/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/legal/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
