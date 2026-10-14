/* ============================================================
   HomeFunc.ts — Types + data for Home page
   ============================================================ */

// ── Image imports ──────────────────────────────────────────
import homeImg from '../assets/heroHome.png'
import imgNotification from '../assets/heroNotification.png'
import heroDeparture from '../assets/heroDeparture.png'
import heroSea from '../assets/heroSea.png'

// Kung may iba pang screenshots sa assets:
// import scheduleImg from '../assets/schedule.png'
// import seaConditionsImg from '../assets/sea-conditions.png'
// import portUpdatesImg from '../assets/port-updates.png'
// import remindersImg from '../assets/reminders.png'

// ── Types ──────────────────────────────────────────────────
export type Feature = {
    icon: string
    title: string
    desc: string
    img: string
}

export type LguStatus = 'ready' | 'soon'

export type LguFeature = {
    icon: string
    title: string
    desc: string
    status: LguStatus
}

export type RoadmapStatus = 'live' | 'soon' | 'later'

export type RoadmapGroup = {
    icon: string
    title: string
    items: readonly string[]
}

export type RoadmapPhase = {
    phase: string
    label: string
    status: RoadmapStatus
    split?: true
    groups?: readonly RoadmapGroup[]
    items?: readonly string[]
}

// ── Features section ───────────────────────────────────────
export const FEATURES: readonly Feature[] = [
    {
        icon: 'fa-calendar-alt',
        title: "See what's sailing today",
        desc: 'Live trip schedule, vessel name, and sailing status. No more checking social media.',
        img: homeImg
    },
    {
        icon: 'fa-water',
        title: 'Know the sea conditions',
        desc: 'Sea condition (Calm to Very Rough) with wave height to help you plan better.',
        img: heroSea
    },
    {
        icon: 'fa-bullhorn',
        title: 'Get the latest port updates',
        desc: 'Timely updates on delays, cancellations, and schedule changes at your port.',
        img: imgNotification
    },
    {
        icon: 'fa-bell',
        title: 'Never miss your boat',
        desc: 'Reminder 30 minutes before departure so you never miss your sailing.',
        img: heroDeparture
    }
] as const

// ── LGU Partnership section ────────────────────────────────
export const LGU_FEATURES: readonly LguFeature[] = [
    {
        icon: 'fa-calendar-alt',
        title: 'Trip Management',
        desc: 'Post schedules and status changes in seconds.',
        status: 'ready'
    },
    {
        icon: 'fa-water',
        title: 'Automatic Sea Advisory',
        desc: 'Marine weather and wave height data built in. No manual posting needed.',
        status: 'ready'
    },
    {
        icon: 'fa-users',
        title: 'Passenger Info System',
        desc: 'Accurate live updates for travelers.',
        status: 'ready'
    },
    {
        icon: 'fa-map-marked-alt',
        title: 'Route Directory',
        desc: 'Manage all registered routes.',
        status: 'ready'
    },
    {
        icon: 'fa-qrcode',
        title: 'Free QR Scanner',
        desc: 'Free scanner app for port staff.',
        status: 'soon'
    },
    {
        icon: 'fa-chart-pie',
        title: 'Unified Dashboard',
        desc: 'Cash + cashless in one view.',
        status: 'soon'
    }
] as const

// ── Roadmap section ────────────────────────────────────────
export const ROADMAP: readonly RoadmapPhase[] = [
    {
        phase: 'Now',
        label: 'Live today',
        status: 'live',
        split: true,
        groups: [
            {
                icon: 'fa-user',
                title: 'Passengers',
                items: [
                    'Live trip schedules',
                    'Sea condition updates',
                    'Port advisories',
                    'Departure reminders'
                ]
            },
            {
                icon: 'fa-user-tie',
                title: 'Port Staff',
                items: [
                    'Manage schedules',
                    'Manage routes & boats',
                    'View passengers'
                ]
            }
        ]
    },
    {
        phase: 'Next',
        label: 'Coming soon',
        status: 'soon',
        items: [
            'Unified LGU dashboard for walk-in and cashless',
            'Online seat booking',
            'Cashless payment (GCash / Maya)',
            'Digital receipt',
            'QR code scanner for conductor'
        ]
    },
    {
        phase: 'Later',
        label: 'Exploring',
        status: 'later',
        items: [
            'More partner ports',
            'Multi-language support',
            'Promote local businesses through ads',
            'Passenger vouchers from ad revenue (lower fares)',
            'Boost coastal tourism'
        ]
    }
] as const

// ── About section ──────────────────────────────────────────
export const ABOUT_TAGS: readonly [string, string][] = [
    ['fa-rocket', 'Startup'],
    ['fa-code', 'Software Development'],
    ['fa-mobile-alt', 'Mobile Applications'],
    ['fa-users', 'Local Community']
] as const

export const ABOUT_PARAS: readonly React.ReactNode[] = [
    'Technology should move everyone forward, not leave local communities behind.',
    'LOOKAL is a technology startup focused on building practical digital solutions for local communities. We believe innovation should not be limited to big cities or large businesses. It should also solve everyday problems in towns and communities that deserve better access to technology.',
    'Tawid is where we begin. Built for municipal ports and the people who depend on them, Tawid brings ferry schedules, sea advisories, and important port updates together in one place, helping passengers plan their trips with confidence. Online booking and cashless payment will be available at participating ports once these services are enabled.',
    'Our mission is simple: to make technology more accessible, practical, and meaningful, starting with the communities that need it most.'
] as const