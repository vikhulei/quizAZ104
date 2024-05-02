const Questions = {
  EntraID: [
    { q: "Three types of user accounts", a: "1) Cloud<br>2) Directory synchronized<br>3) Guest user", tag: 0 },
    { q: "Two templates to create cloud user", a: "1) Create user<br>2) Invite user", tag: 0 },
    { q: "Who can preset data for the cloud user?", a: "Global administrator or User administrator", tag: 0 },
    { q: "Which two names do the accounts have?", a: "1) Display name - Viktor Hulei<br>2) User account name vikhulei@fixitfast.com", tag: 0 },
    { q: "How many days before cloud user account is permanently deleted?", a: "30 days", tag: 0 },
    { q: "How to view errors when creating bulk accounts?", a: "Bulk operation results page in the Azure portal", tag: 0 },
    { q: "What are security group account used for?", a: "To manage memebr and computer access to shared resources", tag: 0 },
    { q: "What are Microsoft 365 group account used for?", a: "To provide access to shared mailbox, calendar, files, SharePoint site and more<br>access for guest users", tag: 0 },
    { q: "Who can implement security and MS365 groups?", a: "Security groups - Microsoft Entra admin<br>MC365 - normal users and Microsoft Entra admins", tag: 0 },
    { q: "What are three ways to add members to the groups?", a: "Assigned - add specific users<br>Dynamic - depends on member's attribute<br>Dynamic device (only for security group) - depends on the device's attribute", tag: 0 },
    { q: "What is admin unit used for?<br>What can you use to manage admin units?<br>Who can manage AUs?", a: "Admin units are used to assign management permissions to the users<br>Azure portal, PowerShell, Graph API, Microsoft 365 admin center can be used<br> Global Admin or Privileged Role Admin can manage AUs", tag: 0 },
    { q: "	What is:<br>Identity<br>Account<br>Microsoft Entra account<br>Azure Tenant<br>Azure subscription	", a: "	Identity - object with username and password<br>Account - identity that has data<br>Entra account is created with Entra ID or MS365<br>Tenant represents organization<br>Subscription is used to pay for services	", tag: 0 },
    { q: "	What is:<br>Identity<br>Account<br>Microsoft Entra account<br>Azure Tenant<br>Azure subscription	", a: "	Identity - object with username and password<br>Account - identity that has data<br>Entra account is created with Entra ID or MS365<br>Tenant represents organization<br>Subscription is used to pay for services	", tag: 0 },
    { q: "	ADDS vs Entra: communication protocols, federation services, structure, what is managed	", a: "	Protocols - no Kerberos, HTTPS (SAML, WS-F, OAuth)<br>Federation services and 3rd party (Facebook...)<br>Flat structure - no OUs and GPOs<br>Only users, groups and policies are managed	", tag: 0 },
    { q: "	Three Microsoft Entra editions	", a: "	Free - 500 th. objects, SSO, Core Identity & Access management, B2B colaboration<P1>Everything else except Identity Protection and Identity Governance<br>P2 - Everything	", tag: 0 },
    { q: "	Which account is used to manage SSPR feature?<br>What are three options for users wh can reset passwords?	", a: "	Global administrator account<br>None, Selected, All	", tag: 0 },
  ],
  Subscriptions: [
    { q: "	How many regions in how many countries are there?<br>What is the minimal distance between datacenters?<br>Which regions are paired and are not in the same geography?	", a: "	60 regions in 140 countries<br>At least 300 miles of separation is prefered<br>Brazil South and Singapore are paired but are not in the same geography	", tag: 0 },
    { q: "	Four ways to obtain Azure subscription	", a: "	Enterprise agreement<br>Microsoft reseller<br>Microsoft partner<br>Personal free account	", tag: 0 },
    { q: "	Four most popular types of Azure subscription	", a: "	Free, Pay-As-You-Go, Enterprise Agreement, and Student	", tag: 0 },
    { q: "	Explain Microsoft Cost Management analysis	", a: "	Microsoft Cost Management cost analysis features explores and analyses your organizational costs. You can monitor accumulated costs over time to estimate monthly, quarterly, or even yearly cost trends against a budget	", tag: 0 },
    { q: "	What are tags used for? What are two parts of a tag? What is the maximum number of tags per resource?		Tags are useful for sorting, searching, managing, and doing analysis on your resources.<br>Name/value pair<br>50	", tag: 0 },
    { q: "	Explain Reservations as cost saving option. How much can you save?	", a: "	Reservation is saving money by paying ahead. Can save up to 72%	", tag: 0 },
    { q: "	What is Azure Credit?<br>How can you save with Azure regions?<br>What can you use to provide estimates for all areas, including compute, networking, storage, web?	", a: "	Use the monthly credit benefit to develop, test, and experiment with new solutions on Azure<br>Pricing can vary from one region to another<br>Pricing calculator	", tag: 0 },
  ],
};

export default Questions;