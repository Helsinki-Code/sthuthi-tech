import { Route, Routes } from "react-router-dom"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { ScrollToTop } from "@/components/site/scroll-to-top"
import { HomePage } from "@/pages/home"
import { CertificationsIndexPage } from "@/pages/certifications-index"
import { CertificationDetailPage } from "@/pages/certification-detail"
import { CustomCertificationPage } from "@/pages/custom-certification"
import { AboutPage } from "@/pages/about"
import { ClientsPage } from "@/pages/clients"
import { ClientDetailPage } from "@/pages/client-detail"
import { ContactPage } from "@/pages/contact"
import { BlogIndexPage } from "@/pages/blog"
import { BlogPostPage } from "@/pages/blog/post"
import { PrivacyPolicyPage } from "@/pages/legal/privacy-policy"
import { TermsOfServicePage } from "@/pages/legal/terms-of-service"
import { CookiePolicyPage } from "@/pages/legal/cookie-policy"
import { NotFoundPage } from "@/pages/not-found"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/certifications" element={<CertificationsIndexPage />} />
          <Route path="/certifications/:slug" element={<CertificationDetailPage />} />
          <Route path="/custom-certification" element={<CustomCertificationPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/clients/:slug" element={<ClientDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/legal/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/legal/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/legal/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
