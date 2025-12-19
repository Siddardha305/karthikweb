import React from 'react';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {

    // Real Data
    const allTestimonials = [
        {
            name: "M krishna prasad",
            text: "Premiere and After Effects Course join ayyanu, Subject explanation chala clear ga undadam valla concepts easy ga ardham ayyayi. Editing ante mundu confuse undedi, kani ee courses join ayyaka clarity vachindi and video editing ni career ga serious ga tiskovachu ane confidence vachindi. Karthik Teaching style clear ga undi kabatti beginners kuda easy ga nerchukovachu. Overall ga idi na learning journey lo oka life-changing moment la anipinchindi.",
            image: "/images/Student testmonials. website/6.png"
        },
        {
            name: "Praveen",
            text: "Starting lo editing basics clear ga ledu, kani course lo concepts step-by-step ga explain chesaru, editing meeda confidence vachindi. Personal Training valla practical knowledge chala improve ayindi and real-time doubts anni clear ayyayi. Training tho paatu placements guidance kuda provide chestunnaru anedi naaku chala manchi vishayam anipinchindi. Job readiness, portifolio building, industry expectations anni clarity tho ardham ayyayi. Overall ga, video editing ni serious career ga tiskovalani anukune vallaki Plan At B training definitely worth it.",
            image: null
        },
        {
            name: "Pakeerugari naveen sai",
            text: "Premiere Pro Course join avvadam valla editing lo clarity vachindi. Mundu nenu chala videos try chesanu nerchukundam ani, kani evaru kuda intha clear ga explanation ivvaledu. Main ga videos length perfect ga undadam valla bore feel lekunda easy ga ardham ayyayi. Overall ga course chala useful anipinchindi.",
            image: "/images/Student testmonials. website/4.png"
        },
        {
            name: "Dashwanth ram",
            text: "Course lo tools explanation chala clear ga undi and live examples chupinchadam valla prati concept easy ga ardham ayyindi. Just theory kakunda practical ga ela use cheyyalo nerpincharu, anduke editing meeda intrest baga increase ayyindi. Overall ga course experience excellent anipinchindi.",
            image: "/images/Student testmonials. website/2.png"
        },
        {
            name: "M Tharun",
            text: "Premiere Pro Course lo join ayyaka learning experience chala positive ga undi. Class time lo vachina doubts anni patience tho clear chesaru, idi naaku chala helpful ayindi. Gradually editing meeda confidence build ayyindi. Overall ga course quality and support rendu excellent anipinchayi",
            image: "/images/Student testmonials. website/8.png"
        },
        {
            name: "Koduri sathish",
            text: "Ee course start chese mundu naku eppudu oka bayam undedi — nenu correct ga video edit cheyyagalana? naa edits clients ki nachuthaya? ani. Kani course and personal training join ayyaka aa fear motham poindi. Ippudu flash shoot offers vachina kuda reject chestunna and elanti video ayina confident ga ‘simple ga handle cheseddam’ ani clients ki cheppagalugutunna, bayam ane thought lekunda. Personal training start chesina time lo naa freelancing income around ₹30,000 undedi, ippudu present freelancing salary ₹60,000 ki reach ayindi. Naa experience share cheyyadam chala happy ga undi. Karthik anna eppudu encourage chestu next level ki grow avvali ani motivate chestaru. Thank you so much Karthik anna",
            image: "/images/Student testmonials. website/9.png"
        },
        {
            name: "Dhana Raj",
            text: "At a time lo Premiere Pro, After Effects, Photoshop ani 3 courses join ayyanu. Present lo Premiere Pro Course complete chesi regular ga practice chesanu, After Effects Course half complete chesanu. Ee learning process valla ippudu nenu oka private news channel lo Video Editor ga work chestunnanu. Concepts clear ga explain cheyyadam, practical approach undadam na career ki chala help ayindi. Ee opportunity ki main reason Plan At B training ani cheppochu. Big thanks to Plan At B and special thanks to Karthik anna for the clear explanations and guidance 🙌🏻🙌🏻",
            image: "/images/Student testmonials. website/5.png"
        },
        {
            name: "Pavan Ram",
            text: "Past lo nenu oka editing course tiskunnanu kani concepts sariga ardham kaaledu. Kani paln at b lo Premiere Pro Course join ayyaka, mi explanation valla prati topic chala clear ga ardham ayyindi. Simple language lo, step-by-step ga cheppadam valla editing easy ga anipinchindi. Ee course naku chala help ayindi, overall ga experience excellent.",
            image: null
        },
        {
            name: "N sai bharadwaja",
            text: "First time nenu video editing nerchukuntunnanu and ee Premiere Pro Course experience chala excellent ga undi. Teaching style chala clear ga undadam valla everyday practice cheyyagalugutunnanu and gradual ga improvement kanipistondi. Idi naaku oka game changer la anipistondi. Low price lo software and resources tho course offer cheyyadam chala great initiative. Great thanks anna, you really did a great job",
            image: "/images/Student testmonials. website/7.png"
        },
        {
            name: "Marikal phaniketh",
            text: "Very good,explanation of the videos,clarity.oka manchi course with a 10 years of experienced mentor.valuable,usefull assets. And also hiring posts are very good,gud opportunity for all.affordable price for premiere pro course",
            image: null
        },
        {
            name: "Harsha Ranjith Yarramsetty",
            text: "Training experience chala excellent ga undi. Explanation super ga chepparu and editing lo clarity vachindi. Good mentor guidance tho train avvadam valla learning process easy ga anipinchindi. Overall ga ee course chala nice experience.",
            image: null
        },
        {
            name: "mogal irfan",
            text: "One thing nenu clear ga cheppali ante — editing meeda serious ga unna vaallu maatrame ila invest chesi skills grow chestaru, and nenu kuda alanti vaallalo okadini. Course buy chesaka nenu totally satisfied. Editing clarity chala improve ayindi and ee course lo chala new things nerchukunna. Overall ga idi 10/10 experience.",
            image: "/images/Student testmonials. website/1.png"
        },
        {
            name: "K. Aravind chary",
            text: "Meru cheppe vidhanam chala bagundhi and concepts clear ga ardham ayyayi. Nenu already oka institute lo classes join ayyanu kani akada explanation sariga ledu, response & support kuda undedi kaadu. Mee basic course lo ne explanation intha clear ga undadam naku chala surprise ayindi. Affordable fee ki antha quality content, clarity and support ivvadam really appreciable. Course start chesina tharvatha editing meeda proper understanding vachindi. Thank you sir, ee amount ki intha baga nerpinchinanduku.",
            image: null
        },
        {
            name: "Prakash",
            text: "Meru cheppe teaching skills valla nenu chala nerchukunnanu. Chala mandi just script and raw material ivvadam varake limited untaru, kani ee course lo video ela edit cheyyali, decision making ela undali ane clarity kuda icharu. Job ela get cheyyali, industry lo ela approach avvali ane guidance kuda chala useful ga undi. Overall ga editing clarity vachindi and course experience very good",
            image: null
        },
        {
            name: "Tanuja Bolla",
            text: "Personal Training valla real-time projects meeda work cheyyadam nerchukunna and software use cheyyadam lo full comfort vachindi. Practical experience tho paatu industry-ready mindset kuda develop ayyindi. Overall ga ee training nannu job readiness side strong ga prepare chesindi.",
            image: null
        },
        {
            name: "Kolimigundla Sankar",
            text: "First time video editing start cheyyadam koncham bayam ga undedi, kani Premiere Pro Course join chesi, videos vinadam and practice cheyyadam start chesaka, ‘I can do it’ ane confidence vachindi. Mainly Karthik gari teaching valla clarity and understanding chala improve ayyindi. Ee course, especially ee price ki, offer cheyyadam chala great anipinchindi. Thank you so much Karthik garu, forever grateful for this experience.",
            image: "/images/Student testmonials. website/3.png"
        }
    ];

    // Distribute into 3 rows (5, 5, 6)
    const row1Data = allTestimonials.slice(0, 5);
    const row2Data = allTestimonials.slice(5, 10);
    const row3Data = allTestimonials.slice(10, 16);



    return (
        <section className="testimonials-section">
            <div className="testimonials-title-container">
                <h2 className="testimonials-title">More Success Stories</h2>
            </div>

            {/* Row 1 */}
            <div className="marquee-row">
                <div className="marquee-track scroll-left">
                    {[...row1Data, ...row1Data, ...row1Data, ...row1Data].map((item, index) => (
                        <TestimonialCard key={`row1-${index}`} {...item} />
                    ))}
                </div>
            </div>

            {/* Row 2 */}
            <div className="marquee-row">
                <div className="marquee-track scroll-left">
                    {[...row2Data, ...row2Data, ...row2Data, ...row2Data].map((item, index) => (
                        <TestimonialCard key={`row2-${index}`} {...item} />
                    ))}
                </div>
            </div>

            {/* Row 3 */}
            <div className="marquee-row">
                <div className="marquee-track scroll-left">
                    {[...row3Data, ...row3Data, ...row3Data, ...row3Data].map((item, index) => (
                        <TestimonialCard key={`row3-${index}`} {...item} />
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Testimonials;
