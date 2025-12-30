import React from "react";
import "./red-team.scss";
import HeroBg from "../../res/diagonal-lines.svg";
import { FaGithub, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";

import JoeImg from "../../res/rt-images/IMG_2307.jpeg";
import Wumb0Img from "../../res/rt-images/ankle-cheese-pls-wumbo-belt-so-i-can-make-sosigs-wumbo-v0-2caodxk4sjzd1~2.jpeg";
import MarshallImg from "../../res/rt-images/me_ists_2022_cropped.jpg";
import HultoImg from "../../res/rt-images/Hulto_reads.jpg";
import PlaceholderImg from "../../res/rt-images/hacker_6017148.png";

const redteamers = [
  {
    name: "Hulto",
    tenure: "2021 - 2024",
    bio: "Hulto is an RIT alumn and was the competition architect for ISTS 2020. Now he volunteers as the red team captain. Professionally, hulto has done various offensive security roles and now works as a Security Architect at Target. Outside of work he enjoys working on the Realm c2 project and powerlifting.",
    img: HultoImg,
    socials: {
      xtwitter: "https://twitter.com/hultoko"
    },
  },
  {
    name: "Joe Abbate",
    tenure: "2025 - 2026",
    bio: "Joe is a Security Engineer at Meta and the router lead for the ISTS Red Team. Known for being the first Red Team member to execute in VR, he is also a Realm contributor and Rust enjoyer.",
    img: JoeImg,
    socials: {
      website: "joeabbate.me",
      discord: "SkyzSoldier",
      github: "https://github.com/jabbate19",
    },
  },
  {
    name: "wumb0",
    tenure: "2017 – 2026",
    bio: "RIT alum, ex RC3 president, CCDC nationals red team, Windows evil-doer, Rust enthusiast, python hater. Talk to me about Rust or literally anything besides computers. Have fun inside! ",
    img: Wumb0Img,
    socials: {
      discord: "wumb0",
    },
  },
  {
    name: "Marshall",
    tenure: "2022 – Present",
    bio: "Lead Pentester. CCDC Red Team. Director of CPTC. Maintainer of NetExec. I love cats, Jiu Jitsu, and metalcore/deathcore. I hate Ruby. Fun fact: I'm still not sure how to computer.",
    img: MarshallImg,
    socials: {
      github: "https://github.com/Marshall-Hallenbeck",
      xtwitter: "https://x.com/MJHallenbeck",
    },
  },
    {
    name: "Sean",
    bio: "Red Teaming on Windows & doing Malware professionally and at CCDC for 10+ years. I'll tell you anything you want to know - but be careful - I'll talk your ear off. Hacker@microsoft.com",
    img: PlaceholderImg
  },
  {
    name : "Nikolas",
    tenure: "2025 - Present",
    bio: "I hold both a Bachelor and Master of Science in Aerospace Engineering and have worked in the information security industry since around 2019, having performed security assessments for several years prior. I specialize in network penetration testing and red team engagements, Active Directory exploitation, adversary emulation, Windows endpoint exploitation, and malware development, and I volunteer as a red teamer for CCDC and ISTS.",
  },
  {
    name: "Rob Fuller (mubix)",
    tenure: "2010 - present",
    bio: "Rob Fuller, known in the cybersecurity community as “mubix,” is a seasoned security leader and engineer with over 20 years of experience across Fortune 10 enterprises, startups, and U.S. government networks. Currently serving as VP in Cybersecurity at McKesson, he leads teams focused on offensive security, vulnerability management, and enterprise hardening. Rob began his career defending and designing networks for the U.S. Marine Corps, U.S. Senate, and Pentagon before moving into Red Team leadership roles across multiple global organizations. A long-time volunteer and mentor, he has been involved with the Collegiate Cyber Defense Competition (CCDC) since 2008—first as a red teamer, then red team captain, and later as CTO of the Mid-Atlantic Region. His technical focus centers on Windows and Active Directory security, complemented by strong skills in Linux and networking. He’s also co-founder of NoVA Hackers, a frequent conference speaker, and served as a technical advisor for HBO’s Silicon Valley.",
    socials: {
      linkedin: "https://linkedin.com/in/mubix",
      xtwitter: "https://x.com/mubix",
      github: "https://github.com/mubix",
    }
  }
  ];

const RedTeam: React.FC = () => {
  return (
    <div className="red-team">
      <div
        className="hero mini-hero"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(18, 18, 18, 1), rgba(0, 0, 0, 0)), url(${HeroBg})` }}
      >
        <h1>Meet the Red Team</h1>
      </div>

      <section className="directory-section">
        <div className="directory-grid">
          {redteamers.map((person, idx) => (
            <div key={idx} className="card">
              <img
                src={person.img ?? PlaceholderImg}
                alt={person.name}
                className="photo"
              />
              <div className="info">
                <h3>{person.name}</h3>
                {person.tenure && <p className="tenure">{person.tenure}</p>}
                {person.bio && <p className="bio">{person.bio}</p>}
                <div className="socials">
                  {person.socials?.xtwitter && (
                    <a href={person.socials.xtwitter} target="_blank" rel="noopener noreferrer">
                      <FaXTwitter size={20} />
                    </a>
                  )}
                  {person.socials?.github && (
                    <a href={person.socials.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub size={20} />
                    </a>
                  )}
                  {person.socials?.discord && (
                    <a href={`https://discord.com/users/${person.socials.discord}`} target="_blank" rel="noopener noreferrer">
                      <FaDiscord size={20} />
                    </a>
                  )}
                  {person.socials?.website && (
                    <a
                      href={`https://${person.socials.website}`} target="_blank" rel="noopener noreferrer">
                      <CgWebsite size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RedTeam;