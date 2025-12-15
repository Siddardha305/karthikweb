import React from 'react';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {

    // Mock Data
    const testimonials1 = [
        {
            text: "Enrolling in Tharun Speaks Video Editing Cohort was one of my best decisions. Within a month, I got an internship at The Boring Edit, later joined Unacademy, and now I'm working at an AI startup. This cohort teaches way beyond editing; they teach storytelling, freelancing, content creation, and everything you actually need to grow.",
            name: "Deepak Divakar",
            role: "Video Editor"
        },
        {
            text: "Hey guys, I am Akash, and I was in my 3rd year of college when I joined. It honestly changed everything for me. Within a few months, I started earning 50-60K a month from editing, which was unreal for me being a student. I took part and won the '21-day challenge' which gave me millions of views.",
            name: "Akash",
            role: "Freelancer"
        },
        {
            text: "Hey everyone, I am Satwik. Before joining Cohort 3, I was just an average 2nd-year B.Tech student with no idea how to start freelancing. Now I earn 40K a month doing video editing. And not just editing, this cohort taught me how to talk to clients, negotiate, and close deals.",
            name: "Satwik",
            role: "Content Creator"
        },
        {
            text: "Hi, I am Prachi. I joined Tharun's Not Just a Video Editing Cohort (Cohort 3). Before this, I was just exploring design with no clear direction. But after joining the cohort, I not only learned Premiere Pro and After Effects from scratch but also understood how to find clients.",
            name: "Prachi",
            role: "Designer & Editor"
        },
        {
            text: "When I joined this cohort, I just wanted to learn editing as a hobby. I knew nothing about editing before I just found it cool, so I joined the cohort, and then I took part in the 21-day challenge. It changed everything for me; I gained 20k followers from that challenge in just 21 days.",
            name: "Dhruvil Patel",
            role: "Influencer"
        }
    ];

    const testimonials2 = [
        {
            text: "I joined Cohort 1 with zero direction in life, and it completely changed my life. After the cohort, I mastered editing, left college, and moved to Bangalore to join Tharun Speaks' team. Since then, I've been earning in lakhs and also started an Instagram page 'Indian video school'.",
            name: "Mazis",
            role: "Team Member @ Tharun Speaks"
        },
        {
            text: "Before joining Cohort 3, I used to edit on Kinemaster and VN because I was too scared to open Premiere Pro. But within a few weeks, I started editing confidently for both short and long-form videos. The live classes, mentors, and community were the best part.",
            name: "Vishal Dake",
            role: "Editor"
        },
        {
            text: "Before joining Cohort 1, I used to deliver newspapers early in the morning just to support my family. I never thought video editing could change my life, but it did. After the cohort, Tharun noticed my work and offered me a chance to work with him. I moved to Bangalore.",
            name: "Aashil Raza",
            role: "Senior Editor"
        },
        {
            text: "Hey guys, I am Padmesh, 19 years old, and currently studying in the UK. I am a student of Tharun's first cohort, and it was a game-changer for me. I went from a beginner to a pro at Premiere Pro. While others are going to college and trying to find a side hustle, I was earning a good amount.",
            name: "Padmesh",
            role: "Student & Editor"
        },
        {
            text: "The community here is amazing, and people genuinely support you. I even got my first freelance client through a special shoutout by Vishi, our senior mentor! I am even paying my own college fees through freelancing.",
            name: "Rohan",
            role: "Student"
        }
    ];

    const testimonialsTelugu = [
        {
            text: "నేను తరుణ్ 'వీడియో ఎడిటింగ్ కోహోర్ట్' లో చేరినప్పుడు నాకు ఎడిటింగ్ గురించి అస్సలు ఏమీ తెలియదు, నిజం చెప్పాలంటే కేవలం ఆసక్తితో జాయిన్ అయ్యాను. కానీ ఆ 4 వారాలు నా జీవితాన్ని మార్చేశాయి. ప్రీమియర్ ప్రో మరియు ఆఫ్టర్ ఎఫెక్ట్స్ నేర్చుకోవడం మాత్రమే కాకుండా, క్లయింట్స్ ని ఎలా సంప్రదించాలి, ఫ్రీలాన్సింగ్ ఎలా మొదలుపెట్టాలి అనేది చాలా క్లియర్ గా నేర్పించారు. కోర్సు పూర్తయిన వెంటనే నాకు మొదటి క్లయింట్ దొరికింది, ఇప్పుడు నేను నెలకు 40 వేల వరకు సంపాదిస్తున్నాను. ఒక సాధారణ స్టూడెంట్ గా మొదలై, ఇప్పుడు నా సొంత ఖర్చులు నేనే భరించే స్థాయికి రావడం నాకు చాలా గర్వంగా ఉంది. తరుణ్ అన్న మెంటర్ షిప్ మరియు ఆ కమ్యూనిటీ సపోర్ట్ వల్లే ఇది సాధ్యమైంది.",
            name: "Sai Krishna",
            role: "Freelance Editor"
        },
        {
            text: "చాలా మంది అనుకుంటారు వీడియో ఎడిటింగ్ అంటే కేవలం సాఫ్ట్ వేర్ నేర్చుకోవడమే అని, కానీ ఈ కోహోర్ట్ లో చేరాక తెలిసింది ఎడిటింగ్ అంటే స్టోరీటెల్లింగ్ అని. తరుణ్ గారు ప్రతి చిన్న విషయాన్ని చాలా వివరంగా, ప్రాక్టికల్ గా చూపించారు. నేను ఇంజనీరింగ్ చదువుతూనే పార్ట్ టైమ్ గా ఎడిటింగ్ మొదలుపెట్టాను. మొదట్లో కష్టంగా అనిపించినా, లైవ్ క్లాసెస్ మరియు డౌట్ సెషన్స్ వల్ల చాలా ఈజీగా నేర్చుకోగలిగాను. ఇప్పుడు నేను 'ది బోరింగ్ ఎడిట్' లో ఇంటర్న్ షిప్ చేస్తున్నాను. నా తల్లిదండ్రులు కూడా చాలా సంతోషంగా ఉన్నారు. ఎవరైతే కెరీర్ లో ఎదగాలి అనుకుంటున్నారో వారికి ఇది బెస్ట్ ప్లాట్ ఫామ్.",
            name: "Vamsi",
            role: "Video Editor"
        },
        {
            text: "ఈ కోహోర్ట్ కేవలం ఎడిటింగ్ క్లాస్ మాత్రమే కాదు, ఇదొక లైఫ్ చేంజింగ్ ఎక్స్ పీరియన్స్. నేను డిగ్రీ మధ్యలో ఉన్నప్పుడు ఏమి చేయాలో తెలియక సతమతమవుతున్న సమయంలో తరుణ్ గారి వీడియో చూసి ఇన్‌స్పైర్ అయి జాయిన్ అయ్యాను. ఆ నిర్ణయం నా కెరీర్ పాత్ ని మార్చేసింది. కోహోర్ట్ లో నేర్చుకున్న స్కిల్స్, ముఖ్యంగా '21 డేస్ ఛాలెంజ్' నాలో కాన్ఫిడెన్స్ ని పెంచింది. ఇప్పుడు నేను ఫుల్ టైమ్ ఫ్రీలాన్సర్ గా వర్క్ చేస్తున్నాను, మరియు యూకే, యుఎస్ క్లయింట్స్ తో డీల్ చేస్తున్నాను. ఒక తెలుగు కుర్రాడిగా గ్లోబల్ క్లయింట్స్ తో పని చేయడం నాకు దక్కిన గొప్ప అవకాశం.",
            name: "Harsha",
            role: "Professional Editor"
        }
    ];

    // Distribute into 3 rows
    const row1Data = [testimonials1[0], testimonialsTelugu[0], testimonials1[1], testimonials1[2], testimonials2[0]];
    const row2Data = [testimonials1[3], testimonialsTelugu[1], testimonials1[4], testimonials2[1], testimonials2[2]];
    const row3Data = [testimonials2[3], testimonials2[4], testimonialsTelugu[2], testimonials1[0], testimonials1[1]];



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
