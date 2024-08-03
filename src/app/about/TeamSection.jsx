import { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from "next/image";
import Link from 'next/link';

const teamMembers = [
    {
        name: 'Tom Knolltonns',
        title: 'Consultant',
        description: 'Lorem Ipsum aenean commodo dolig trium. Proin qual de suis erestopius.',
        imgSrc: '/assets/images2/Main-team-1.jpg',
        social: {
            facebook: '#',
            twitter: '#',
            instagram: '#',
        },
    },
    {
        name: 'Juliet Alan',
        title: 'PR Manager',
        description: 'Lorem Ipsum aenean commodo dolig trium. Proin qual de suis erestopius.',
        imgSrc: '/assets/images2/Main-team-2.jpg',
        social: {
            facebook: '#',
            twitter: '#',
            instagram: '#',
        },
    },
    {
        name: 'Bill Ewing',
        title: 'Photographer',
        description: 'Lorem Ipsum aenean commodo dolig trium. Proin qual de suis erestopius.',
        imgSrc: '/assets/images2/Main-team-3.jpg',
        social: {
            facebook: '#',
            twitter: '#',
            instagram: '#',
        },
    },
    {
        name: 'Fiona Endley',
        title: 'Consultant',
        description: 'Lorem Ipsum aenean commodo dolig trium. Proin qual de suis erestopius.',
        imgSrc: '/assets/images2/Main-team-4.jpg',
        social: {
            facebook: '#',
            twitter: '#',
            instagram: '#',
        },
    },
];

const TeamSection = () => {
    const [hoveredMember, setHoveredMember] = useState(0);

    return (
        <div className="team-section">
            <div className="team-column">
                <Image
                    src={teamMembers[0].imgSrc}
                    className="img-fluid"
                    alt={teamMembers[0].name}
                    width={800}
                    height={500}
                />
            </div>
            <div className="team-column details-column">
                <div className="team-details">
                    <h2>{teamMembers[hoveredMember].title}</h2>
                    <h3>{teamMembers[hoveredMember].name}</h3>
                    <p>{teamMembers[hoveredMember].description}</p>
                    <div className="social-media-links">
                        <Link href={teamMembers[hoveredMember].social.facebook}><FaFacebook /></Link>
                        <Link href={teamMembers[hoveredMember].social.twitter}><FaTwitter /></Link>
                        <Link href={teamMembers[hoveredMember].social.instagram}><FaInstagram /></Link>
                    </div>
                </div>
            </div>
            {teamMembers.slice(1).map((member, index) => (
                <div
                    key={index}
                    className="team-column"
                    onMouseEnter={() => setHoveredMember(index + 1)}
                >
                    <Image
                        src={member.imgSrc}
                        alt={member.name}
                        width={800}
                        height={500}
                    />
                </div>
            ))}
        </div>
    );
};

export default TeamSection;
