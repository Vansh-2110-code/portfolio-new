'use client';
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useLanguage } from '@/context/LanguageContext';
import SectionWrapper from '@/components/SectionWrapper';
import { experienceData } from '@/data/experience';
import { FiBriefcase, FiCalendar, FiMapPin, FiExternalLink, FiCheckCircle, FiAward, FiCpu, FiTrendingUp } from 'react-icons/fi';

const pulseGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 15px rgba(99, 102, 241, 0.4), 0 0 30px rgba(99, 102, 241, 0.2);
  }
  50% {
    box-shadow: 0 0 25px rgba(99, 102, 241, 0.8), 0 0 50px rgba(99, 102, 241, 0.4);
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 3.5rem;
  flex-wrap: wrap;
`;

const FilterBtn = styled.button`
  padding: 0.65rem 1.4rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid ${({ $active, theme }) => ($active ? theme.colors.accent : theme.colors.border)};
  background: ${({ $active, theme }) =>
    $active
      ? `linear-gradient(135deg, ${theme.colors.accent}25, ${theme.colors.accent}10)`
      : theme.name === 'dark'
      ? 'rgba(15, 23, 42, 0.6)'
      : 'rgba(255, 255, 255, 0.8)'};
  color: ${({ $active, theme }) => ($active ? theme.colors.accent : theme.colors.textSecondary)};
  backdrop-filter: blur(12px);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
  }
`;

const TimelineWrapper = styled.div`
  position: relative;
  max-width: 950px;
  margin: 0 auto;
  padding: 1rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    ${({ $isRTL }) => ($isRTL ? 'right: 28px;' : 'left: 28px;')};
    width: 2px;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.accent} 0%,
      ${({ theme }) => theme.colors.border} 50%,
      transparent 100%
    );

    @media (min-width: 768px) {
      ${({ $isRTL }) => ($isRTL ? 'right: 50%;' : 'left: 50%;')};
      transform: translateX(${({ $isRTL }) => ($isRTL ? '50%' : '-50%')});
    }
  }
`;

const TimelineItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 3.5rem;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: ${({ $isEven, $isRTL }) => {
      if ($isRTL) return $isEven ? 'flex-end' : 'flex-start';
      return $isEven ? 'flex-start' : 'flex-end';
    }};
  }
`;

const TimelineNode = styled.div`
  position: absolute;
  top: 1.5rem;
  ${({ $isRTL }) => ($isRTL ? 'right: 17px;' : 'left: 17px;')};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.bg};
  border: 3px solid ${({ $color, theme }) => $color || theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  animation: ${pulseGlow} 3s infinite ease-in-out;

  &::after {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ $color, theme }) => $color || theme.colors.accent};
  }

  @media (min-width: 768px) {
    ${({ $isRTL }) => ($isRTL ? 'right: 50%;' : 'left: 50%;')};
    transform: translateX(${({ $isRTL }) => ($isRTL ? '50%' : '-50%')});
  }
`;

const CardContainer = styled.div`
  width: 100%;
  padding-left: ${({ $isRTL }) => ($isRTL ? '0' : '4rem')};
  padding-right: ${({ $isRTL }) => ($isRTL ? '4rem' : '0')};

  @media (min-width: 768px) {
    width: 46%;
    padding: 0;
  }
`;

const ExperienceCard = styled.div`
  background: ${({ theme }) =>
    theme.name === 'dark' ? 'rgba(15, 23, 42, 0.75)' : 'rgba(255, 255, 255, 0.9)'};
  backdrop-filter: blur(16px);
  border: 1px solid ${({ theme }) => (theme.name === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)')};
  border-radius: 1.25rem;
  padding: 1.75rem;
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${({ $color }) => $color || '#6366f1'}, transparent);
  }

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ $color }) => `${$color}60` || 'rgba(99, 102, 241, 0.4)'};
    box-shadow: 0 25px 50px -12px ${({ $color }) => `${$color}25` || 'rgba(99, 102, 241, 0.15)'};
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const RoleTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.25rem 0;
  line-height: 1.3;
`;

const CompanyRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ $color, theme }) => $color || theme.colors.accent};
`;

const MetricBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  background: ${({ $color }) => `${$color}20` || 'rgba(99, 102, 241, 0.15)'};
  color: ${({ $color }) => $color || '#6366f1'};
  border: 1px solid ${({ $color }) => `${$color}40` || 'rgba(99, 102, 241, 0.3)'};
  letter-spacing: 0.02em;
  white-space: nowrap;
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
`;

const MetaItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
`;

const BulletList = styled.ul`
  margin: 0 0 1.25rem 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const BulletItem = styled.li`
  font-size: 0.9rem;
  color: ${({ theme }) => (theme.name === 'dark' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(30, 41, 59, 0.9)')};
  line-height: 1.6;
  position: relative;
  padding-left: ${({ $isRTL }) => ($isRTL ? '0' : '1.5rem')};
  padding-right: ${({ $isRTL }) => ($isRTL ? '1.5rem' : '0')};

  &::before {
    content: '▹';
    position: absolute;
    ${({ $isRTL }) => ($isRTL ? 'right: 0;' : 'left: 0;')};
    color: ${({ $color, theme }) => $color || theme.colors.accent};
    font-weight: bold;
    font-size: 1.1rem;
    line-height: 1.4;
  }
`;

const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => (theme.name === 'dark' ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)')};
`;

const TechTag = styled.span`
  padding: 0.25rem 0.65rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${({ theme }) => (theme.name === 'dark' ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)')};
  color: ${({ theme }) => theme.colors.textSecondary};
  border: 1px solid ${({ theme }) => (theme.name === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)')};
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const LiveLinkBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 1rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: #10b981;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    color: #34d399;
    transform: translateX(${({ $isRTL }) => ($isRTL ? '-3px' : '3px')});
  }
`;

export default function Experience() {
  const { t, isRTL } = useLanguage();
  const [filter, setFilter] = useState('all');

  const translatedItems = t('experience.items');

  const filteredData = experienceData.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <SectionWrapper
      id="experience"
      label={t('experience.label') || 'Career & Impact'}
      title={t('experience.title') || 'Work Experience'}
      description={t('experience.description') || 'Internships, live cloud deployments, ML engineering, and leadership milestones.'}
    >
      <FilterContainer>
        <FilterBtn $active={filter === 'all'} onClick={() => setFilter('all')}>
          <FiBriefcase /> {t('experience.filterAll') || 'All Experience'}
        </FilterBtn>
        <FilterBtn $active={filter === 'work'} onClick={() => setFilter('work')}>
          <FiCpu /> {t('experience.filterWork') || 'Engineering & ML'}
        </FilterBtn>
        <FilterBtn $active={filter === 'leadership'} onClick={() => setFilter('leadership')}>
          <FiAward /> {t('experience.filterLeadership') || 'Leadership'}
        </FilterBtn>
      </FilterContainer>

      <TimelineWrapper $isRTL={isRTL}>
        {filteredData.map((item, index) => {
          const trans = Array.isArray(translatedItems)
            ? translatedItems.find((ti) => ti.company.toLowerCase().includes(item.company.toLowerCase().split(' ')[0])) || translatedItems[index]
            : null;

          const role = trans?.role || item.role;
          const company = trans?.company || item.company;
          const period = trans?.period || item.period;
          const location = trans?.location || item.location;
          const metric = trans?.metric || item.metric;
          const points = trans?.points || item.points;

          const isEven = index % 2 === 0;

          return (
            <TimelineItem key={item.id} $isEven={isEven} $isRTL={isRTL}>
              <TimelineNode $color={item.color} $isRTL={isRTL} />
              <CardContainer $isRTL={isRTL}>
                <ExperienceCard $color={item.color}>
                  <CardHeader>
                    <div>
                      <RoleTitle>{role}</RoleTitle>
                      <CompanyRow $color={item.color}>
                        {company}
                      </CompanyRow>
                    </div>
                    {metric && (
                      <MetricBadge $color={item.color}>
                        <FiTrendingUp size={12} /> {metric}
                      </MetricBadge>
                    )}
                  </CardHeader>

                  <MetaRow>
                    <MetaItem>
                      <FiCalendar size={13} /> {period}
                    </MetaItem>
                    <MetaItem>
                      <FiMapPin size={13} /> {location}
                    </MetaItem>
                  </MetaRow>

                  <BulletList>
                    {points.map((pt, pIdx) => (
                      <BulletItem key={pIdx} $color={item.color} $isRTL={isRTL}>
                        {pt}
                      </BulletItem>
                    ))}
                  </BulletList>

                  {item.link && (
                    <LiveLinkBtn
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      $isRTL={isRTL}
                    >
                      <FiCheckCircle size={14} /> {t('experience.viewLive') || 'View Live System ↗'}
                    </LiveLinkBtn>
                  )}

                  <TechRow>
                    {item.tech.map((tech) => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </TechRow>
                </ExperienceCard>
              </CardContainer>
            </TimelineItem>
          );
        })}
      </TimelineWrapper>
    </SectionWrapper>
  );
}
