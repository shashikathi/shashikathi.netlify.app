"use client";

import { ArrowDownRight, ArrowUpRight, CalendarDays, Github, Linkedin, Mail, MoveUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const links = [
  { label: "Email", value: "shashikathi56@gmail.com", href: "mailto:shashikathi56@gmail.com", icon: Mail },
  { label: "LinkedIn", value: "linkedin.com/in/shashikathi", href: "https://linkedin.com/in/shashikathi/", icon: Linkedin },
  { label: "GitHub", value: "github.com/shashikathi", href: "https://github.com/shashikathi", icon: Github },
];

export default function Contact() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="contact" className="contact-section">
      <div className="section-shell">
        <motion.div
          className="contact-panel"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reducedMotion ? 0 : 0.58, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="contact-main">
            <div className="section-eyebrow"><span>07 / CONTACT</span><span className="eyebrow-rule" aria-hidden="true" /><span>YOUR TURN</span></div>
            <h2>Let&apos;s make<br /><em>good work happen.</em></h2>
            <p>Have a role, a project, or a process that needs a closer look? I&apos;d be glad to hear from you.</p>
            <a className="contact-primary-link" href="mailto:shashikathi56@gmail.com">
              Start a conversation <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="contact-side">
            <div className="contact-side-heading"><span>FIND ME HERE</span><ArrowDownRight size={16} aria-hidden="true" /></div>
            <div className="contact-links">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <a className="contact-link-row" key={link.label} href={link.href} target={link.label === "Email" ? undefined : "_blank"} rel={link.label === "Email" ? undefined : "noreferrer"}>
                    <span className="contact-link-icon"><Icon size={17} strokeWidth={1.7} aria-hidden="true" /></span>
                    <span><small>{link.label}</small><b>{link.value}</b></span>
                    <MoveUpRight size={16} className="contact-link-arrow" aria-hidden="true" />
                  </a>
                );
              })}
            </div>

            <div className="contact-actions">
              <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ31-XFOLaGNNnVWSDNfG3ZfeoMPTj4pOwp9V-cmhu4YQEynWtzf9m-e2Ok8EwElzEJjjk0yBhE0?gv=true" target="_blank" rel="noreferrer">
                <CalendarDays size={16} aria-hidden="true" /> Book a conversation <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <a href="https://drive.google.com/file/d/16w-7QXuVxu5igqtdtB2SeTt_WsK3DOPE/view?usp=sharing" target="_blank" rel="noreferrer">
                Download résumé <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
          <span className="contact-orbit contact-orbit-one" aria-hidden="true" />
          <span className="contact-orbit contact-orbit-two" aria-hidden="true" />
        </motion.div>
        <motion.div
          className="appointment-panel"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: reducedMotion ? 0 : 0.58, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="appointment-heading">
            <div className="section-eyebrow"><span>BOOK A CONVERSATION</span><span className="eyebrow-rule" aria-hidden="true" /></div>
            <h3>Pick a time that works.</h3>
            <p>Use the calendar to schedule a quick conversation.</p>
          </div>
          <div className="appointment-frame">
            <iframe
              title="Schedule a conversation with Preetham"
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ31-XFOLaGNNnVWSDNfG3ZfeoMPTj4pOwp9V-cmhu4YQEynWtzf9m-e2Ok8EwElzEJjjk0yBhE0?gv=true"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
