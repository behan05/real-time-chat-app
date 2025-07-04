import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography
} from '@/MUI/MuiComponents';
import { ExpandMoreIcon } from '@/MUI/MuiIcons';

const faqs = [
  {
    question: 'What is Connect?',
    answer:
      'Connect is a real-time video chat platform that lets you instantly meet and talk to new people around the world. It’s designed for meaningful conversations and quick connections.'
  },
  {
    question: 'Is Connect free to use?',
    answer:
      'Yes, Connect is completely free. You can create an account, set your preferences, and start chatting with people globally at no cost.'
  },
  {
    question: 'Is signup required to use Connect?',
    answer:
      'Yes, a quick signup is required to ensure safety and personalized matches. It takes less than a minute, and you can immediately set up your profile preferences.'
  },
  {
    question: 'What kind of profile information is needed?',
    answer:
      "You'll be asked to provide basic details like age, gender, preferred language, and interests. This helps improve your matching experience and keeps the platform safe."
  },
  {
    question: 'Can I filter who I connect with?',
    answer:
      'Yes, you can filter matches based on gender preference, language, location, and age range to find more relevant conversations.'
  },
  {
    question: 'Is Connect safe for everyone?',
    answer:
      'We take user safety seriously with account verification, real-time moderation, and reporting tools. Harassment, abuse, or inappropriate behavior is not tolerated.'
  },
  {
    question: 'Can I control my video and audio?',
    answer:
      'Yes. You can mute your microphone or turn off your camera at any time during a call. You’re always in control of your visibility.'
  },
  {
    question: 'How is Connect different from other chat apps?',
    answer:
      'Connect blends the excitement of random chat with smart filters, profile-based matching, and a clean, premium UI focused on user comfort and safety.'
  },
  {
    question: 'Can I report or block users?',
    answer:
      'Absolutely. If someone behaves inappropriately, you can report or block them instantly. We review all reports to keep the community safe.'
  },
  {
    question: 'Can I use Connect on mobile devices?',
    answer:
      'Yes! Connect is fully responsive and works seamlessly on phones, tablets, and desktops — no app installation needed.'
  }
];

function FAQ() {
  const [expanded, setExpanded] = React.useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Box
      sx={{
        mt: 6,
        background: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        gap: 1
      }}
    >
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
          disableGutters
          sx={{
            backdropFilter: `blur(14px)`,
            background: 'transparent'
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  color: expanded === index ? 'success.main' : 'text.secondary',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: 'secondary.main'
                  },
                  '&:active': {
                    color: 'warning.main'
                  }
                }}
              />
            }
          >
            <Typography variant="subtitle1" letterSpacing={2} fontWeight={600}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              color="text.secondary"
              variant="body2"
              sx={{
                textAlign: 'left',
                lineHeight: 1.6
              }}
            >
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

export default FAQ;
