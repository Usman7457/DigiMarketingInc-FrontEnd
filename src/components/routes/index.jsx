import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout";
import AdminLayout from "../layout/admin-layout";
import {
  Home,
  NotFound,
  About,
  Services,
  DigitalMarketing,
  SocialMediaMarketing,
  SearchEngineMarketing,
  SearchEngineOptimization,
  SoftwareDevelopment,
  WebsiteDevelopment,
  MobileAppDevelopment,
  GraphicDesigning,
  AugmentedReality,
  ContentWriting,
  LogoDesign,
  GameDesign,
  Pricing,
  Team,
  Portfolio,
  Blog,
  Disclaimer,
  SiteMap,
  Contact,
  TermsAndConditions,
  PrivacyPolicy,
  RefundPolicy,
  AdminDashboard,
  Login,
  SignUp,
  ForgotPassword,
  BlogDetail,
  BlogOperations,
  FaqOperations,
  TeamOperations,
  PricingOperations,
  PortfolioOperations,
  TestimonailOperations,
  FormDataOperations,
  Subscribers,
  UserOperations,
} from "../pages";
import Stats from "../pages/admin/statistics";
import PortfolioDetail from "../pages/portfolio-detail";
import ResetPassword from "../pages/auth/reset-password";

const RouterForm = () => {
  return (
    <>
      <div className="wrap">
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/digital-marketing" element={<DigitalMarketing />} />
              <Route
                path="/social-media-marketing"
                element={<SocialMediaMarketing />}
              />
              <Route
                path="/search-engine-marketing"
                element={<SearchEngineMarketing />}
              />
              <Route
                path="/search-engine-optimization"
                element={<SearchEngineOptimization />}
              />
              <Route
                path="/software-development"
                element={<SoftwareDevelopment />}
              />
              <Route
                path="/website-development"
                element={<WebsiteDevelopment />}
              />
              <Route
                path="/mobile-app-development"
                element={<MobileAppDevelopment />}
              />
              <Route path="/graphic-designing" element={<GraphicDesigning />} />
              <Route path="/logo-design" element={<LogoDesign />} />
              <Route path="/game-design" element={<GameDesign />} />
              <Route path="/content-writing" element={<ContentWriting />} />
              <Route path="/augmented-reality" element={<AugmentedReality />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/team" element={<Team />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route
                path="/terms-and-conditions"
                element={<TermsAndConditions />}
              />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/site-map" element={<SiteMap />} />
              <Route path="/blog-detail/:slug" element={<BlogDetail />} />
              <Route
                path="/portfolio-detail/:slug"
                element={<PortfolioDetail />}
              />
            </Route>
            <Route element={<AdminLayout />}>
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/blog-operations" element={<BlogOperations />} />
              <Route path="/faq-operations" element={<FaqOperations />} />
              <Route path="/team-operations" element={<TeamOperations />} />
              <Route
                path="/pricing-operations"
                element={<PricingOperations />}
              />
              <Route
                path="/portfolio-operations"
                element={<PortfolioOperations />}
              />
              <Route
                path="/testimonial-operations"
                element={<TestimonailOperations />}
              />
              <Route
                path="/form-data-operations"
                element={<FormDataOperations />}
              />
              <Route path="/stats" element={<Stats />} />
              <Route path="/subscribers" element={<Subscribers />} />
              <Route path="/user-operations" element={<UserOperations />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:id" element={<ResetPassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default RouterForm;
