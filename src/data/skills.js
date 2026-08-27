import { FaReact, FaPython, FaGitAlt, FaDatabase, FaBrain, FaNetworkWired } from 'react-icons/fa';
import {
    SiTensorflow, SiScikitlearn, SiPandas, SiNumpy,
    SiPowerbi, SiCplusplus, SiNextdotjs, SiPostgresql,
    SiGooglegemini, SiJavascript, SiTypescript, SiDocker
} from 'react-icons/si';

export const skillCategories = [
    {
        title: 'Machine Learning & AI',
        description: 'Predictive modeling, deep neural nets & intelligent agents',
        icon: '🧠',
        skills: [
            { name: 'Python', icon: FaPython, level: 95, color: '#3776AB' },
            { name: 'TensorFlow', icon: SiTensorflow, level: 90, color: '#FF6F00' },
            { name: 'Scikit-learn', icon: SiScikitlearn, level: 92, color: '#F7931E' },
            { name: 'Deep Learning', icon: FaBrain, level: 88, color: '#E040FB' },
            { name: 'Gemini API', icon: SiGooglegemini, level: 90, color: '#8E75FF' },
            { name: 'Predictive Modeling', icon: FaBrain, level: 92, color: '#00E676' },
        ],
    },
    {
        title: 'Data Analytics & SQL',
        description: 'EDA, ETL pipelines & interactive decision dashboards',
        icon: '📊',
        skills: [
            { name: 'Pandas', icon: SiPandas, level: 95, color: '#150458' },
            { name: 'NumPy', icon: SiNumpy, level: 92, color: '#013243' },
            { name: 'Power BI', icon: SiPowerbi, level: 90, color: '#F2C811' },
            { name: 'SQL & Queries', icon: FaDatabase, level: 90, color: '#336791' },
            { name: 'PostgreSQL', icon: SiPostgresql, level: 85, color: '#4169E1' },
            { name: 'Data Cleaning & EDA', icon: FaDatabase, level: 95, color: '#10B981' },
        ],
    },
    {
        title: 'Full-Stack & Tools',
        description: 'Scalable platforms, networking & cloud engineering',
        icon: '⚡',
        skills: [
            { name: 'Next.js & React', icon: SiNextdotjs, level: 92, color: '#FFFFFF' },
            { name: 'React Native', icon: FaReact, level: 85, color: '#61DAFB' },
            { name: 'C++', icon: SiCplusplus, level: 88, color: '#00599C' },
            { name: 'Git & GitHub', icon: FaGitAlt, level: 92, color: '#F05032' },
            { name: 'Scapy & Security', icon: FaNetworkWired, level: 86, color: '#06B6D4' },
            { name: 'Docker / Cloud', icon: SiDocker, level: 80, color: '#2496ED' },
        ],
    },
];
