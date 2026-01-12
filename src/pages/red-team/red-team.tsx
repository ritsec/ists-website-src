import React, {useState} from "react";
import "./red-team.scss";
import { FaGithub, FaDiscord, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";

import JoeImg from "../../res/rt-images/IMG_2307.jpeg";
import Wumb0Img from "../../res/rt-images/ankle-cheese-pls-wumbo-belt-so-i-can-make-sosigs-wumbo-v0-2caodxk4sjzd1~2.jpeg";
import MarshallImg from "../../res/rt-images/me_ists_2022_cropped.jpg";
import HultoImg from "../../res/rt-images/Hulto_reads.jpg";
import DrewImg from "../../res/rt-images/Young_Drew.jpg";
import MubixImg from "../../res/rt-images/mubix.png";
import PlaceholderImg from "../../res/rt-images/hacker_6017148.png";

const redteamers = [
  {
    name: "Hulto",
    tenure: "2021 - Present",
    bio: "Hulto is an RIT alumn and was the competition architect for ISTS 2020. Now he volunteers as the red team captain. Professionally, hulto has done various offensive security roles and now works as a Security Architect at Target. Outside of work he enjoys working on the Realm c2 project and powerlifting.",
    img: HultoImg,
    socials: {
      xtwitter: "https://twitter.com/hultoko"
    },
  },
  {
    name: "Rob Fuller (mubix)",
    tenure: "2010 - Present",
    bio: "Rob Fuller, known in the cybersecurity community as “mubix,” is a seasoned security leader and engineer with over 20 years of experience across Fortune 10 enterprises, startups, and U.S. government networks. Currently serving as VP in Cybersecurity at McKesson, he leads teams focused on offensive security, vulnerability management, and enterprise hardening. Rob began his career defending and designing networks for the U.S. Marine Corps, U.S. Senate, and Pentagon before moving into Red Team leadership roles across multiple global organizations. A long-time volunteer and mentor, he has been involved with the Collegiate Cyber Defense Competition (CCDC) since 2008—first as a red teamer, then red team captain, and later as CTO of the Mid-Atlantic Region. His technical focus centers on Windows and Active Directory security, complemented by strong skills in Linux and networking. He’s also co-founder of NoVA Hackers, a frequent conference speaker, and served as a technical advisor for HBO’s Silicon Valley.",
    img: MubixImg,
    socials: {
      linkedin: "https://linkedin.com/in/mubix",
      xtwitter: "https://x.com/mubix",
      github: "https://github.com/mubix",
    }
  },
  {
    name: "wumb0",
    tenure: "2017 – Present",
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
    tenure: "2023 - Present",
    bio: "Red Teaming on Windows & doing Malware professionally and at CCDC for 10+ years. I'll tell you anything you want to know - but be careful - I'll talk your ear off. Hacker@microsoft.com",
    img: PlaceholderImg
  },
  {
    name: "Joe Abbate",
    tenure: "2025 - Present",
    bio: "Joe is a Security Engineer at Meta and the router lead for the ISTS Red Team. Known for being the first Red Team member to execute in VR, he is also a Realm contributor and Rust enjoyer.",
    img: JoeImg,
    socials: {
      website: "joeabbate.me",
      discord: "SkyzSoldier",
      github: "https://github.com/jabbate19",
    },
  },
  {
    name : "Nikolas",
    tenure: "2025 - Present",
    bio: "I hold both a Bachelor and Master of Science in Aerospace Engineering and have worked in the information security industry since around 2019, having performed security assessments for several years prior. I specialize in network penetration testing and red team engagements, Active Directory exploitation, adversary emulation, Windows endpoint exploitation, and malware development, and I volunteer as a red teamer for CCDC and ISTS.",
    img: PlaceholderImg,
  },
  {
    name: "Drew Young",
    tenure: "2026 - Present",
    bio: "Drew is a member of the Advisory Red Team at Security Risk Advisors, where he focuses on offensive security assessments and adversary emulation. Before joining SRA, he served as the Red Team Chief for RITSEC, leading the team during competitions and mentoring newer members in offensive operations. Drew also competed in the Collegiate Cyber Defense Competition (CCDC) and served as the Competition Architect for the Information Security Talent Search (ISTS) in 2024. He has a strong background in Linux, networking, and red team tooling, and enjoys developing creative attack paths to challenge and strengthen blue teams.",
    img: DrewImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/drew-m-young",
    }
  }
  ];

const RedTeam: React.FC = () => {
  const [activePerson, setActivePerson] = useState<null | typeof redteamers[number]>(null);
  return (
    <div className="red-team">
      <div
        className="hero mini-hero"
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

                <div className="title">
                  <h3>{person.name}</h3>
                </div>

                {person.tenure && <p className="tenure">{person.tenure}</p>}

                {person.bio && (
                    <p className="bio">
                      {person.bio.length > 180
                          ? (
                              <>
                                {person.bio.slice(0, 180)}…
                                <span
                                    className="read-more-inline"
                                    onClick={() => setActivePerson(person)}
                                    role="button"
                                    tabIndex={0}
                                    aria-label={`Read full bio for ${person.name}`}
                                    onKeyDown={(e) => {
                                      if (e.key === "Enter" || e.key === " ") {
                                        setActivePerson(person);
                                      }
                                    }}
                                >
                                  {" "}Read more
                                </span>
                              </>
                          )
                          : person.bio}
                    </p>
                )}


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
                  {person.socials?.linkedin && (
                    <a
                      href={`${person.socials.linkedin}`} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin size={20} />
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

        {activePerson && (
            <div className="modal-backdrop" onClick={() => setActivePerson(null)}>
              <div className="modal modal-enter" onClick={(e) => e.stopPropagation()}>

                <h2>{activePerson.name}</h2>
                {activePerson.tenure && <p className="tenure">{activePerson.tenure}</p>}
                <p className="bio">{activePerson.bio}</p>
              </div>
            </div>
        )}

      </section>
    </div>
  );
};

export default RedTeam;