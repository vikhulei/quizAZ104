const Questions = {
  EntraID: [
    {q: "Three types of user accounts", a: "1) Cloud<br>2) Directory synchronized<br>3) Guest user", tag: 0},
    {q: "Two templates to create cloud user", a: "1) Create user<br>2) Invite user", tag: 0},
    {q: "Who can preset data for the cloud user?", a: "Global administrator or User administrator", tag: 0},
    {q: "Which two names do the accounts have?", a: "1) Display name - Viktor Hulei<br>2) User account name vikhulei@fixitfast.com", tag: 0},
    {q: "How many days before cloud user account is permanently deleted?", a: "30 days", tag: 0},
    {q: "How to view errors when creating bulk accounts?", a: "Bulk operation results page in the Azure portal", tag: 0},
    {q: "What are security group account used for?", a: "To manage memebr and computer access to shared resources", tag: 0},
    {q: "What are Microsoft 365 group account used for?", a: "To provide access to shared mailbox, calendar, files, SharePoint site and more<br>access for guest users", tag: 0},
    {q: "Who can implement security and MS365 groups?", a: "Security groups - Microsoft Entra admin<br>MC365 - normal users and Microsoft Entra admins", tag: 0},
    {q: "What are three ways to add members to the groups?", a: "Assigned - add specific users<br>Dynamic - depends on member's attribute<br>Dynamic device (only for security group) - depends on the device's attribute", tag: 0},
    {q: "What is admin unit used for?<br>What can you use to manage admin units?<br>Who can manage AUs?", a: "Admin units are used to assign management permissions to the users<br>Azure portal, PowerShell, Graph API, Microsoft 365 admin center can be used<br> Global Admin or Privileged Role Admin can manage AUs", tag: 0},
    {q: "	What is:<br>Identity<br>Account<br>Microsoft Entra account<br>Azure Tenant<br>Azure subscription	", a: "	Identity - object with username and password<br>Account - identity that has data<br>Entra account is created with Entra ID or MS365<br>Tenant represents organization<br>Subscription is used to pay for services	", tag: 0},
  ],
  Subscriptions: [
  ],
};

export default Questions;