import React from 'react';
import {
  Code2,
  Database,
  Globe,
  Palette,
  Server,
  Smartphone,
} from 'lucide-react';

const skillsData = [
  {
    category: 'System Administration',
    icon: <Globe size={24} />,
    skills: [
      'Windows Server (2016/2019/2022)',
      'Linux (Ubuntu, CentOS, RHEL)',
      'Active Directory, Group Policy',
      'DHCP, DNS, DFS',
      'Patch Management (WSUS, SCCM)',
    ],
  },
  {
    category: 'Networking',
    icon: <Server size={24} />,
    skills: [
      'TCP/IP, Subnetting, VLANs',
      'Routing & Switching (Cisco, Juniper)',
      'VPN (IPSec, SSL, OpenVPN)',
      'Firewall Management (pfSense, Fortinet)',
      'Wireless Networking (Unifi, Meraki)',
    ],
  },
  {
    category: 'Cloud & Virtualization',
    icon: <Database size={24} />,
    skills: [
      'Microsoft Azure / AWS',
      'Azure Active Directory',
      'Virtualization (VMware, Hyper-V)',
      'Cloud Storage (S3, Blob)',
      'Disaster Recovery as a Service (DRaaS)',
    ],
  },
  {
    category: 'Security & Compliance',
    icon: <Smartphone size={24} />,
    skills: [
      'Endpoint Protection (Defender, CrowdStrike)',
      'MFA, Zero Trust Security',
      'SIEM (Splunk, Microsoft Sentinel)',
      'Vulnerability Management (Nessus, OpenVAS)',
      'Compliance (ISO 27001, GDPR)',
    ],
  },
  {
    category: 'Monitoring & Logging',
    icon: <Palette size={24} />,
    skills: [
      'Zabbix, Nagios, PRTG',
      'Grafana, Prometheus',
      'Windows Event Viewer',
      'Syslog & SNMP',
      'Real-time Alerting & Dashboards',
    ],
  },
  {
    category: 'Backup & Disaster Recovery',
    icon: <Code2 size={24} />,
    skills: [
      'Veeam Backup & Replication',
      'Acronis Cyber Protect',
      'Commvault',
      'Snapshot-based Backups',
      'BCDR Planning & Implementation',
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-16 sm:py-20 bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-900 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Leveraging cutting-edge technologies to build powerful and scalable
            applications
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="backdrop-blur-md bg-white/10 rounded-xl p-6 sm:p-8 transform hover:-translate-y-1 transition-all duration-300 border border-white/20 hover:bg-white/20"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-lg text-blue-400 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 backdrop-blur-sm bg-white/10 text-blue-300 rounded-full text-sm font-medium hover:bg-white/20 transition-colors border border-white/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
