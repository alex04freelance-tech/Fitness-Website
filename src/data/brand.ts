export const brand = {
  name: 'FORMA',
  subtitle: 'Movement & Performance Club',
  tagline: 'Move better. Feel stronger. Live differently.',
  heroStatement: 'Move better.',
  heroSupport: 'Fitness / Pilates / Personal Training / Wellness',
  primaryCta: 'Discover the Club',
  secondaryCta: 'Explore Classes',
  accentColor: '#8B9D7B',
  email: 'hello@formaclub.com',
  phone: '+1 (415) 555-0190',
  address: '1240 Mill Street, San Francisco, CA 94110',
  hours: [
    { day: 'Monday — Friday', time: '5:30 AM — 10:00 PM' },
    { day: 'Saturday', time: '6:00 AM — 8:00 PM' },
    { day: 'Sunday', time: '7:00 AM — 6:00 PM' },
  ],
  social: {
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
  },
  parking: 'Complimentary underground parking for 80 vehicles. Accessible via Mill Street entrance.',
  transport: '2-minute walk from 24th St Mission BART station. Muni lines 14, 49, and 67 stop at the corner.',
};

export const philosophyStatement = {
  primary: 'Training is not only about looking stronger.',
  secondary: 'It is about moving better.',
  pillars: [
    { label: 'Performance', text: 'Every session builds measurable capacity — strength, power, endurance.' },
    { label: 'Mobility', text: 'Full-range movement is the foundation. We train it deliberately.' },
    { label: 'Strength', text: 'Functional strength that translates to how you live and move.' },
    { label: 'Posture', text: 'Alignment and body awareness that carry beyond the studio.' },
    { label: 'Energy', text: 'Sustainable training that leaves you energised, not depleted.' },
    { label: 'Consistency', text: 'Programs designed to be maintained for years, not weeks.' },
    { label: 'Wellbeing', text: 'A culture that treats training as part of a fuller life.' },
  ],
};

export type ClassCategory = 'Fitness' | 'Body & Movement' | 'Group Classes' | 'Performance';

export type ClassItem = {
  id: string;
  name: string;
  category: ClassCategory;
  description: string;
  level: string;
  duration: string;
  format: string;
  intensity: string;
  image: string;
  icon: string;
};

export const classCategories: { id: ClassCategory; label: string }[] = [
  { id: 'Fitness', label: 'Fitness' },
  { id: 'Body & Movement', label: 'Body & Movement' },
  { id: 'Group Classes', label: 'Group Classes' },
  { id: 'Performance', label: 'Performance' },
];

export const classes: ClassItem[] = [
  {
    id: 'strength-training',
    name: 'Strength Training',
    category: 'Fitness',
    description: 'Progressive resistance training built on compound movements. Develop real-world strength with barbells, dumbbells, and kettlebells in a structured program.',
    level: 'Intermediate',
    duration: '55 min',
    format: 'Group',
    intensity: 'High',
    image: 'https://images.pexels.com/photos/3066334/pexels-photo-3066334.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    icon: 'dumbbell',
  },
  {
    id: 'functional-training',
    name: 'Functional Training',
    category: 'Fitness',
    description: 'Movement patterns that mirror daily life — push, pull, hinge, squat, carry. Build a body that performs under any demand.',
    level: 'All Levels',
    duration: '50 min',
    format: 'Group',
    intensity: 'Moderate',
    image: 'https://images.pexels.com/photos/32830368/pexels-photo-32830368.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    icon: 'activity',
  },
  {
    id: 'circuit-training',
    name: 'Circuit Training',
    category: 'Fitness',
    description: 'Time-based stations cycling through strength and cardio. Maximize work capacity in a fast-paced, energising format.',
    level: 'All Levels',
    duration: '45 min',
    format: 'Group',
    intensity: 'High',
    image: 'https://images.pexels.com/photos/4164465/pexels-photo-4164465.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    icon: 'repeat',
  },
  {
    id: 'cross-training',
    name: 'Cross Training',
    category: 'Fitness',
    description: 'Varied functional movements at high intensity. A community-driven workout that builds all-around athleticism.',
    level: 'Intermediate',
    duration: '60 min',
    format: 'Group',
    intensity: 'High',
    image: 'https://images.pexels.com/photos/29859460/pexels-photo-29859460.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    icon: 'zap',
  },
  {
    id: 'hiit',
    name: 'HIIT',
    category: 'Fitness',
    description: 'High-intensity intervals alternating maximal effort with active recovery. Burn calories, build cardio capacity, and push your threshold.',
    level: 'All Levels',
    duration: '30 min',
    format: 'Group',
    intensity: 'High',
    image: 'https://images.pexels.com/photos/39219682/pexels-photo-39219682.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    icon: 'flame',
  },
  {
    id: 'cardio-training',
    name: 'Cardio Training',
    category: 'Fitness',
    description: 'Steady-state and interval-based cardio programming on treadmills, rowers, and bikes. Build an engine that lasts.',
    level: 'All Levels',
    duration: '40 min',
    format: 'Group',
    intensity: 'Moderate',
    image: 'https://images.pexels.com/photos/3757957/pexels-photo-3757957.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    icon: 'heart-pulse',
  },
  {
    id: 'core-training',
    name: 'Core Training',
    category: 'Fitness',
    description: 'Targeted work for the trunk — anti-rotation, anti-extension, and dynamic stability. The foundation of every strong movement.',
    level: 'All Levels',
    duration: '30 min',
    format: 'Group',
    intensity: 'Moderate',
    image: 'https://images.pexels.com/photos/13977309/pexels-photo-13977309.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    icon: 'target',
  },
  {
    id: 'reformer-pilates',
    name: 'Reformer Pilates',
    category: 'Body & Movement',
    description: 'A controlled full-body practice focused on strength, posture, mobility and precision. Spring resistance and flowing sequences on the reformer.',
    level: 'All Levels',
    duration: '50 min',
    format: 'Group',
    intensity: 'Moderate',
    image: 'https://images.pexels.com/photos/33360214/pexels-photo-33360214.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    icon: 'wind',
  },
  {
    id: 'mat-pilates',
    name: 'Mat Pilates',
    category: 'Body & Movement',
    description: 'The classical mat work — a precise sequence of exercises building deep core strength, pelvic stability, and spinal mobility.',
    level: 'All Levels',
    duration: '45 min',
    format: 'Group',
    intensity: 'Low',
    image: 'https://images.pexels.com/photos/31509822/pexels-photo-31509822.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    icon: 'circle',
  },
  {
    id: 'mobility',
    name: 'Mobility',
    category: 'Body & Movement',
    description: 'Active mobility work that improves joint range of motion, tissue quality, and movement control. Essential for recovery and longevity.',
    level: 'All Levels',
    duration: '40 min',
    format: 'Group',
    intensity: 'Low',
    image: 'https://images.pexels.com/photos/4970976/pexels-photo-4970976.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    icon: 'move-3d',
  },
  {
    id: 'stretching',
    name: 'Stretching & Flexibility',
    category: 'Body & Movement',
    description: 'Guided stretching protocols targeting tight areas, fascial release, and breath-led relaxation. Leave feeling longer and lighter.',
    level: 'All Levels',
    duration: '30 min',
    format: 'Group',
    intensity: 'Low',
    image: 'https://images.pexels.com/photos/5038866/pexels-photo-5038866.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    icon: 'leaf',
  },
  {
    id: 'postural-training',
    name: 'Postural Training',
    category: 'Body & Movement',
    description: 'Corrective exercise and body-awareness work that addresses postural imbalances from desk work, stress, and repetitive movement.',
    level: 'All Levels',
    duration: '45 min',
    format: 'Group',
    intensity: 'Low',
    image: 'https://images.pexels.com/photos/8769163/pexels-photo-8769163.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    icon: 'align-vertical-justify-center',
  },
  {
    id: 'yoga',
    name: 'Yoga',
    category: 'Group Classes',
    description: 'Vinyasa and Hatha flow linking breath to movement. Build flexibility, balance, and mental clarity in a grounded practice.',
    level: 'All Levels',
    duration: '60 min',
    format: 'Group',
    intensity: 'Low',
    image: 'https://images.pexels.com/photos/39190415/pexels-photo-39190415.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    icon: 'sun',
  },
  {
    id: 'indoor-cycling',
    name: 'Indoor Cycling',
    category: 'Group Classes',
    description: 'A high-energy ride with music-driven intervals. Climb, sprint, and recover in a fully immersive studio environment.',
    level: 'All Levels',
    duration: '45 min',
    format: 'Group',
    intensity: 'High',
    image: 'https://images.pexels.com/photos/8766378/pexels-photo-8766378.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    icon: 'bike',
  },
  {
    id: 'dance-fitness',
    name: 'Dance Fitness',
    category: 'Group Classes',
    description: 'A choreographed cardio workout blending dance styles with fitness fundamentals. Fun, social, and surprisingly effective.',
    level: 'All Levels',
    duration: '50 min',
    format: 'Group',
    intensity: 'Moderate',
    image: 'https://images.pexels.com/photos/31742998/pexels-photo-31742998.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    icon: 'music',
  },
  {
    id: 'total-body',
    name: 'Total Body',
    category: 'Group Classes',
    description: 'A comprehensive conditioning class hitting every major movement pattern. Strength, cardio, and core in one balanced session.',
    level: 'All Levels',
    duration: '55 min',
    format: 'Group',
    intensity: 'Moderate',
    image: 'https://images.pexels.com/photos/4720827/pexels-photo-4720827.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    icon: 'body',
  },
  {
    id: 'personal-training',
    name: 'Personal Training',
    category: 'Performance',
    description: 'One-on-one coaching tailored to your goals, body, and schedule. The fastest path from where you are to where you want to be.',
    level: 'All Levels',
    duration: '60 min',
    format: 'Private',
    intensity: 'Variable',
    image: 'https://images.pexels.com/photos/39219674/pexels-photo-39219674.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    icon: 'user-cog',
  },
  {
    id: 'athletic-conditioning',
    name: 'Athletic Conditioning',
    category: 'Performance',
    description: 'Sport-specific power, speed, and agility training. Plyometrics, change of direction, and explosive strength for competitive athletes.',
    level: 'Advanced',
    duration: '60 min',
    format: 'Small Group',
    intensity: 'High',
    image: 'https://images.pexels.com/photos/4720230/pexels-photo-4720230.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    icon: 'trophy',
  },
  {
    id: 'strength-conditioning',
    name: 'Strength & Conditioning',
    category: 'Performance',
    description: 'Periodised strength programming with conditioning blocks. Built for athletes who need to perform at their peak over a season.',
    level: 'Advanced',
    duration: '75 min',
    format: 'Small Group',
    intensity: 'High',
    image: 'https://images.pexels.com/photos/6628962/pexels-photo-6628962.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    icon: 'medal',
  },
  {
    id: 'running-training',
    name: 'Running Training',
    category: 'Performance',
    description: 'Structured run training with pace work, intervals, and tempo sessions. Improve form, efficiency, and race times.',
    level: 'Intermediate',
    duration: '60 min',
    format: 'Group',
    intensity: 'Moderate',
    image: 'https://images.pexels.com/photos/4065509/pexels-photo-4065509.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    icon: 'footprints',
  },
];

export type Trainer = {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  classes: string[];
  philosophy: string;
  image: string;
};

export const trainers: Trainer[] = [
  {
    id: 'luca-ferri',
    name: 'Luca Ferri',
    specialty: 'Strength & Functional Training',
    experience: '12 years',
    classes: ['Strength Training', 'Cross Training', 'Athletic Conditioning'],
    philosophy: 'Train with intention. Every rep has a purpose — find it, and the results follow.',
    image: 'https://images.pexels.com/photos/32085424/pexels-photo-32085424.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  },
  {
    id: 'elena-marchetti',
    name: 'Elena Marchetti',
    specialty: 'Pilates & Movement',
    experience: '10 years',
    classes: ['Reformer Pilates', 'Mat Pilates', 'Postural Training'],
    philosophy: 'Precision over force. The body responds to awareness, not just effort.',
    image: 'https://images.pexels.com/photos/6739935/pexels-photo-6739935.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  },
  {
    id: 'marco-bianchi',
    name: 'Marco Bianchi',
    specialty: 'HIIT & Conditioning',
    experience: '8 years',
    classes: ['HIIT', 'Circuit Training', 'Indoor Cycling'],
    philosophy: 'Discomfort is the currency of growth. Learn to spend it wisely.',
    image: 'https://images.pexels.com/photos/3912944/pexels-photo-3912944.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  },
  {
    id: 'sofia-russo',
    name: 'Sofia Russo',
    specialty: 'Yoga & Mobility',
    experience: '9 years',
    classes: ['Yoga', 'Mobility', 'Stretching & Flexibility'],
    philosophy: 'Flexibility is freedom. Move without restriction and everything changes.',
    image: 'https://images.pexels.com/photos/6739123/pexels-photo-6739123.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  },
  {
    id: 'david-okoro',
    name: 'David Okoro',
    specialty: 'Personal Training & Performance',
    experience: '15 years',
    classes: ['Personal Training', 'Strength & Conditioning', 'Running Training'],
    philosophy: 'There is no generic program. There is only the program that works for you.',
    image: 'https://images.pexels.com/photos/4398351/pexels-photo-4398351.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  },
];

export type ScheduleSlot = {
  day: string;
  time: string;
  classId: string;
  instructor: string;
  capacity: number;
  filled: number;
};

export const scheduleDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const scheduleFilters = ['All', 'Pilates', 'Fitness', 'Yoga', 'Functional', 'Cardio', 'Personal Training'];

export const schedule: ScheduleSlot[] = [
  { day: 'Monday', time: '06:00', classId: 'hiit', instructor: 'Marco Bianchi', capacity: 16, filled: 12 },
  { day: 'Monday', time: '07:30', classId: 'strength-training', instructor: 'Luca Ferri', capacity: 12, filled: 10 },
  { day: 'Monday', time: '09:00', classId: 'reformer-pilates', instructor: 'Elena Marchetti', capacity: 8, filled: 6 },
  { day: 'Monday', time: '12:00', classId: 'cardio-training', instructor: 'Marco Bianchi', capacity: 16, filled: 8 },
  { day: 'Monday', time: '17:30', classId: 'functional-training', instructor: 'Luca Ferri', capacity: 14, filled: 14 },
  { day: 'Monday', time: '19:00', classId: 'yoga', instructor: 'Sofia Russo', capacity: 20, filled: 15 },
  { day: 'Tuesday', time: '06:00', classId: 'cardio-training', instructor: 'Marco Bianchi', capacity: 16, filled: 7 },
  { day: 'Tuesday', time: '07:30', classId: 'mat-pilates', instructor: 'Elena Marchetti', capacity: 12, filled: 9 },
  { day: 'Tuesday', time: '09:00', classId: 'cross-training', instructor: 'Luca Ferri', capacity: 12, filled: 11 },
  { day: 'Tuesday', time: '12:00', classId: 'core-training', instructor: 'Marco Bianchi', capacity: 16, filled: 10 },
  { day: 'Tuesday', time: '17:30', classId: 'indoor-cycling', instructor: 'Marco Bianchi', capacity: 20, filled: 18 },
  { day: 'Tuesday', time: '19:00', classId: 'mobility', instructor: 'Sofia Russo', capacity: 15, filled: 8 },
  { day: 'Wednesday', time: '06:00', classId: 'functional-training', instructor: 'Luca Ferri', capacity: 14, filled: 9 },
  { day: 'Wednesday', time: '07:30', classId: 'reformer-pilates', instructor: 'Elena Marchetti', capacity: 8, filled: 8 },
  { day: 'Wednesday', time: '09:00', classId: 'hiit', instructor: 'Marco Bianchi', capacity: 16, filled: 13 },
  { day: 'Wednesday', time: '12:00', classId: 'total-body', instructor: 'Luca Ferri', capacity: 16, filled: 11 },
  { day: 'Wednesday', time: '17:30', classId: 'circuit-training', instructor: 'Marco Bianchi', capacity: 14, filled: 10 },
  { day: 'Wednesday', time: '19:00', classId: 'yoga', instructor: 'Sofia Russo', capacity: 20, filled: 16 },
  { day: 'Thursday', time: '06:00', classId: 'strength-training', instructor: 'Luca Ferri', capacity: 12, filled: 12 },
  { day: 'Thursday', time: '07:30', classId: 'mat-pilates', instructor: 'Elena Marchetti', capacity: 12, filled: 7 },
  { day: 'Thursday', time: '09:00', classId: 'cross-training', instructor: 'Luca Ferri', capacity: 12, filled: 10 },
  { day: 'Thursday', time: '12:00', classId: 'cardio-training', instructor: 'Marco Bianchi', capacity: 16, filled: 6 },
  { day: 'Thursday', time: '17:30', classId: 'indoor-cycling', instructor: 'Marco Bianchi', capacity: 20, filled: 19 },
  { day: 'Thursday', time: '19:00', classId: 'stretching', instructor: 'Sofia Russo', capacity: 15, filled: 9 },
  { day: 'Friday', time: '06:00', classId: 'hiit', instructor: 'Marco Bianchi', capacity: 16, filled: 14 },
  { day: 'Friday', time: '07:30', classId: 'reformer-pilates', instructor: 'Elena Marchetti', capacity: 8, filled: 7 },
  { day: 'Friday', time: '09:00', classId: 'functional-training', instructor: 'Luca Ferri', capacity: 14, filled: 11 },
  { day: 'Friday', time: '12:00', classId: 'core-training', instructor: 'Marco Bianchi', capacity: 16, filled: 8 },
  { day: 'Friday', time: '17:30', classId: 'dance-fitness', instructor: 'Sofia Russo', capacity: 20, filled: 15 },
  { day: 'Friday', time: '19:00', classId: 'yoga', instructor: 'Sofia Russo', capacity: 20, filled: 17 },
  { day: 'Saturday', time: '07:00', classId: 'cross-training', instructor: 'Luca Ferri', capacity: 12, filled: 12 },
  { day: 'Saturday', time: '08:30', classId: 'reformer-pilates', instructor: 'Elena Marchetti', capacity: 8, filled: 8 },
  { day: 'Saturday', time: '10:00', classId: 'total-body', instructor: 'Marco Bianchi', capacity: 16, filled: 13 },
  { day: 'Saturday', time: '11:30', classId: 'mobility', instructor: 'Sofia Russo', capacity: 15, filled: 10 },
  { day: 'Sunday', time: '08:00', classId: 'yoga', instructor: 'Sofia Russo', capacity: 20, filled: 14 },
  { day: 'Sunday', time: '09:30', classId: 'mat-pilates', instructor: 'Elena Marchetti', capacity: 12, filled: 8 },
  { day: 'Sunday', time: '11:00', classId: 'stretching', instructor: 'Sofia Russo', capacity: 15, filled: 7 },
];

export type Facility = {
  id: string;
  name: string;
  description: string;
  image: string;
  detail: string;
};

export const facilities: Facility[] = [
  {
    id: 'strength-area',
    name: 'Strength Area',
    description: 'A dedicated platform with competition racks, Olympic barbells, plates, and dumbbells up to 50kg. Calibrated for serious lifting.',
    image: 'https://images.pexels.com/photos/6628962/pexels-photo-6628962.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    detail: '4 power racks · 2 Olympic platforms',
  },
  {
    id: 'functional-zone',
    name: 'Functional Zone',
    description: 'Open turf space with sleds, kettlebells, medicine balls, rings, and battle ropes. Built for movement in every plane.',
    image: 'https://images.pexels.com/photos/9545914/pexels-photo-9545914.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    detail: '200 m² turf · sled track · rig system',
  },
  {
    id: 'pilates-studio',
    name: 'Pilates Studio',
    description: 'A serene studio with eight reformers, Cadillac, chairs, and barrels. Natural light and sprung floors for precise, controlled work.',
    image: 'https://images.pexels.com/photos/18499500/pexels-photo-18499500.png?auto=compress&cs=tinysrgb&h=800&w=1200',
    detail: '8 reformers · Cadillac · small apparatus',
  },
  {
    id: 'cardio-zone',
    name: 'Cardio Zone',
    description: 'Premium treadmills, rowers, assault bikes, and stair climbers with personal screens. Overlooking the city through floor-to-ceiling glass.',
    image: 'https://images.pexels.com/photos/35215421/pexels-photo-35215421.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    detail: '20 machines · personal entertainment',
  },
  {
    id: 'recovery-area',
    name: 'Recovery Area',
    description: 'Sauna, cold plunge, compression boots, and a relaxation lounge. Built to help you recover faster and train again sooner.',
    image: 'https://images.pexels.com/photos/7031713/pexels-photo-7031713.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    detail: 'Sauna · cold plunge · compression lounge',
  },
  {
    id: 'personal-training',
    name: 'Personal Training Space',
    description: 'A private training floor with semi-exclusive equipment. One-on-one sessions without the noise of the main gym floor.',
    image: 'https://images.pexels.com/photos/6455906/pexels-photo-6455906.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    detail: 'Private studio · exclusive equipment',
  },
  {
    id: 'stretching-mobility',
    name: 'Stretching & Mobility Area',
    description: 'A quiet corner with mats, foam rollers, bands, and a flexibility rig. Designed for warm-ups, cool-downs, and dedicated mobility sessions.',
    image: 'https://images.pexels.com/photos/4970976/pexels-photo-4970976.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    detail: 'Mat space · foam rollers · bands · rig',
  },
];

export type Membership = {
  id: string;
  name: string;
  price: string;
  frequency: string;
  tagline: string;
  features: string[];
  access: string;
  highlighted?: boolean;
};

export const memberships: Membership[] = [
  {
    id: 'essential',
    name: 'Essential',
    price: '$89',
    frequency: 'per month',
    tagline: 'Full gym access during all opening hours.',
    features: ['Full gym floor access', 'Locker rooms & showers', 'Recovery area access', 'Fitness assessment'],
    access: 'All opening hours',
  },
  {
    id: 'performance',
    name: 'Performance',
    price: '$149',
    frequency: 'per month',
    tagline: 'Everything in Essential plus unlimited group classes.',
    features: ['Everything in Essential', 'Unlimited group classes', 'Indoor cycling studio', 'Quarterly progress review', 'Guest passes (2/month)'],
    access: 'All opening hours',
    highlighted: true,
  },
  {
    id: 'complete',
    name: 'Complete',
    price: '$229',
    frequency: 'per month',
    tagline: 'The full FORMA experience with premium services.',
    features: ['Everything in Performance', '4 Pilates reformer sessions/month', '2 personal training sessions/month', 'Nutrition consultation', 'Priority class booking', 'Recovery treatments'],
    access: 'All opening hours + early access',
  },
  {
    id: 'private',
    name: 'Private',
    price: 'Custom',
    frequency: 'tailored to you',
    tagline: 'Fully customised coaching built around your goals.',
    features: ['Everything in Complete', 'Weekly personal training', 'Customised programming', 'Body composition tracking', 'Direct trainer access', 'Flexible scheduling'],
    access: 'Unlimited',
  },
];

export const clubImages = [
  { src: 'https://images.pexels.com/photos/35215412/pexels-photo-35215412.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200', caption: 'Main training floor', sub: '1,200 m² of integrated training space' },
  { src: 'https://images.pexels.com/photos/18499500/pexels-photo-18499500.png?auto=compress&cs=tinysrgb&h=800&w=1200', caption: 'Pilates studio', sub: 'Natural light and sprung wood floors' },
  { src: 'https://images.pexels.com/photos/8611295/pexels-photo-8611295.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200', caption: 'Equipment detail', sub: 'Curated, commercial-grade apparatus' },
  { src: 'https://images.pexels.com/photos/7031713/pexels-photo-7031713.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200', caption: 'Recovery lounge', sub: 'Sauna, cold plunge, and stillness' },
  { src: 'https://images.pexels.com/photos/35215421/pexels-photo-35215421.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200', caption: 'Cardio zone', sub: 'Floor-to-ceiling glass and city light' },
  { src: 'https://images.pexels.com/photos/9545914/pexels-photo-9545914.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200', caption: 'Functional zone', sub: 'Open turf, sleds, and rigs' },
];

export const personalTrainingFocus = [
  'Strength',
  'Body composition',
  'Mobility',
  'Performance',
  'Rehabilitation-oriented movement',
  'Athletic conditioning',
  'Personalised goals',
];
