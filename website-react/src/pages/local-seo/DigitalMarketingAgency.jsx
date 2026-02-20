import LocalSEOTemplate from './LocalSEOTemplate'

const SHARED_LINKS = [
    { label: 'Best Digital Marketing Agency Chennai', href: '/best-digital-marketing-agency-chennai' },
    { label: 'SEO Services in Chennai', href: '/seo-services-chennai' },
    { label: 'Social Media Marketing Chennai', href: '/social-media-marketing-chennai' },
    { label: 'PPC Management Chennai', href: '/ppc-management-chennai' },
    { label: 'Content Marketing Agency Chennai', href: '/content-marketing-agency-chennai' },
    { label: 'Best Marketing Agency Chennai', href: '/best-marketing-agency-chennai' },
]

export default function DigitalMarketingAgency({ onOpenModal }) {
    return (
        <LocalSEOTemplate
            onOpenModal={onOpenModal}
            seoTitle="Digital Marketing Agency in Chennai | Monkey Mind Media"
            seoDescription="Top digital marketing agency in Chennai. Monkey Mind Media delivers data-driven campaigns, SEO, social media, and AI-powered marketing solutions for businesses across Tamil Nadu."
            seoKeywords="digital marketing agency in chennai, digital marketing agency chennai, digital marketing in chennai, online marketing agency chennai, internet marketing chennai"
            h1="Digital Marketing Agency in Chennai"
            heroLabel="FULL-SPECTRUM DIGITAL MARKETING"
            heroSubtext="Monkey Mind Media is a results-driven digital marketing agency in Chennai combining performance data science and AI automation to help businesses scale across every digital channel."
            sections={[
                {
                    heading: 'Why Chennai Businesses Choose Monkey Mind Media',
                    body: [
                        'The digital marketing landscape in Chennai has evolved rapidly. Businesses across T Nagar, Anna Nagar, and the OMR corridor are competing for digital visibility against both local competitors and national brands. A generic marketing approach no longer works.',
                        'As a digital marketing agency in Chennai, Monkey Mind Media brings a systems-first approach. We don\'t run isolated campaigns — we build integrated digital ecosystems where paid media, organic search, social engagement, and automation work in concert. Every rupee spent is tracked, every impression measured, and every lead qualified.',
                        'Our team operates from Chennai and understands the local business environment — from the competitive dynamics of Velachery\'s commercial sector to the startup culture along the IT corridor. This local knowledge, combined with enterprise-grade AI tools, is what separates us from template-driven agencies.'
                    ]
                },
                {
                    heading: 'Our Approach to Digital Marketing',
                    body: [
                        'We begin every engagement with a strategic audit — analyzing your current digital presence, competitive landscape, and market opportunity. From there, we build a custom growth architecture that aligns with your business objectives.',
                        'Unlike traditional agencies that rely on manual processes, we integrate AI automation at every stage. Our systems monitor campaign performance in real-time, reallocate budgets based on live data signals, and generate creative variations at scale. This means faster optimization cycles and significantly better ROI for Chennai businesses.'
                    ]
                },
                {
                    heading: 'Digital Marketing Services We Offer in Chennai',
                    bullets: [
                        'Search Engine Optimization (Technical, On-Page, Off-Page)',
                        'Google Ads & PPC Campaign Management',
                        'Social Media Strategy & Management',
                        'AI-Powered Video Ads & Creative Production',
                        'WhatsApp Business Automation',
                        'Email Marketing & CRM Integration',
                        'Conversion Rate Optimization (CRO)',
                        'Analytics & Performance Dashboards'
                    ]
                },
                {
                    heading: 'Industries We Serve Across Chennai',
                    body: [
                        'We\'ve delivered measurable results for businesses across Chennai\'s most competitive verticals. Our healthcare clients in Adyar and Mylapore have seen patient acquisition costs drop by over 40%. Real estate developers along ECR and OMR have generated thousands of qualified leads through our performance marketing systems.',
                        'Education institutions in Anna Nagar and Kilpauk trust our enrollment funnel systems to fill seats semester after semester. We also work with political campaigns across Tamil Nadu, deploying constituency-level intelligence platforms that are unique in the Chennai market.'
                    ],
                    bullets: [
                        'Healthcare & Hospitals',
                        'Real Estate & Construction',
                        'Education & EdTech',
                        'E-Commerce & D2C',
                        'Professional Services & B2B',
                        'Political Campaigns & Public Affairs'
                    ]
                },
                {
                    heading: 'Results That Speak for Chennai Brands',
                    body: [
                        'A leading healthcare chain across South Chennai saw a 280% increase in website-driven appointments within 6 months. A real estate developer on OMR generated over 3,500 qualified leads in a single quarter through our integrated Google Ads and WhatsApp automation system.',
                        'These aren\'t vanity metrics. Our reporting framework tracks revenue impact, not just clicks and impressions. As a digital marketing agency in Chennai, we hold ourselves accountable to business outcomes — because that\'s what actually matters to the brands we serve.'
                    ]
                },
                {
                    heading: 'The Monkey Mind Media Advantage',
                    body: [
                        'Chennai is home to hundreds of digital marketing agencies. What makes us different is our engineering mindset. We don\'t see marketing as creative guesswork — we see it as a system design problem. Our infrastructure includes AI-powered creative generation, real-time bid optimization, and automated reporting.',
                        'When you partner with Monkey Mind Media, you\'re not hiring a team that runs ads. You\'re engaging a systems engineering firm that builds growth infrastructure designed to compound over time.'
                    ]
                }
            ]}
            faqs={[
                {
                    q: 'What is the cost of hiring a digital marketing agency in Chennai?',
                    a: 'Digital marketing costs in Chennai vary based on scope and channels. Monthly retainers for comprehensive digital marketing typically range from ₹25,000 to ₹2,00,000+ depending on the scale of campaigns, number of platforms, and level of automation required. At Monkey Mind Media, we provide transparent pricing based on your specific business objectives.'
                },
                {
                    q: 'How long does it take to see results from digital marketing in Chennai?',
                    a: 'Paid campaigns (Google Ads, Meta Ads) can generate leads within the first week. SEO results typically become visible in 3-6 months. Social media growth and brand authority take 2-4 months to build momentum. We set realistic timelines at the start of every engagement and provide weekly performance reports.'
                },
                {
                    q: 'Do you work with small businesses in Chennai or only large enterprises?',
                    a: 'We work with businesses of all sizes across Chennai — from local shops in T Nagar and Velachery to enterprise clients with multi-city operations. Our service tiers are designed to scale with your business, so whether you\'re spending ₹30,000 or ₹10,00,000 monthly, we have a system for you.'
                }
            ]}
            internalLinks={SHARED_LINKS.filter(l => l.href !== '/digital-marketing-agency-chennai')}
            ctaTitle="Scale Your Digital Presence in Chennai"
            ctaText="Get a free strategy audit from our Chennai digital marketing experts. No obligation, no fluff — just data-backed growth recommendations."
        />
    )
}
