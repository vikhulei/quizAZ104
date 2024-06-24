const Questions = {
  Exam_Entra_Blobs_VMs_Container: [
    //subscriptions - RBAC
    { q: "	Which option can you use to manage governance across multiple Azure subscriptions?	", a: "	Management groups facilitate the hierarchical ordering of Azure resources into collections, at a level of scope above subscriptions	", tag: 0 },
    { q: ". Which roles can you clone to create the new roles? ", a: " Built in and subscription roles ", tag: 0 },
    { q: "  Is licensing applied to a nested groups?<br>Is a role applied to a nested group? ", a: "No<br>No", tag: 0 },
    { q: " Who is co-adminstrator? ", a: " Co-administrators have full access to all resources in a SUBSCRIPTION, including the ability to create, read, update, and delete resources. ", tag: 0 },

        //Entra
    { q: " What is required for an external user invitation? ", a: " Email address<br>InviteReirectUrl ", tag: 0 },
    { q: " Which two settings should you configure from the Overview blade to change the login name/email for the invited user?  ", a: " Identities - mail<br>BB collaboration - Reset redemption status ", tag: 0 },
    { q: " To which groups can you assign a Entra ID licenses?<br>What is mail-enabled security group? ", a: " Security and Microsoft365 with Security enabled. Not to Mail-enabled security<br>A mail-enabled security group can be used to distribute messages and to grant access permissions to resources in Active Directory ", tag: 0 },
    { q: " Can you delete a group with an assigned Entra ID license?<br>Can you delete the user? ", a: " Group - no<br> User - probably yes ", tag: 0 },

        //storage blobs
    { q: " What accounts support lifecycle management?<br>Moving to archive? ", a: " All blobs in general-purpose v2, premium block blob, and Blob Storage accounts (not AppendBlob or PageBlob)<br>Same as above, but only configured for LRS, GRS, or RA-GRS  ", tag: 0 },
    { q: " How to ensure that the users can view only specific blobs based on blob index tags? ", a: " Set up role assignmnent condition ", tag: 0 },
    { q: " What can you encrypt with Encryption Scope? ", a: " Containers and blobs ", tag: 0 },
    { q: " Can blobs be backed up to the vaults? ", a: " No ", tag: 0 },
    { q: " Two roles to be able to upload files ", a: " Reader - to view storage account resources<br>Blob Data Contributor - to upload data to the blob ", tag: 0 },

    //applications
    {q: " What is scale up for Applications? ", a: " More CPU, disk space, memory, dedicated VMs, custome domains, staging slots etc. ", tag: 0},
    { q: " What should be first created before doing a backup for the app?  ", a: " Azure Storage Account ", tag: 0 },
    
    //VMs & containers
    { q: " Which storage services support conditions when assigning roles ", a: " Containers ", tag: 0 },
    { q: " How to ensure the service/server runs on all VMs after deployment? ", a: " Use DSC ", tag: 0 },
    { q: " How can you protect both operating system disks and data disks with full volume encryption? ", a: " By using Azure Disk Encryption ", tag: 0 },
    { q: " Can you delete a vault which is configured as a backup? ", a: " No, you need to stop the backup first ", tag: 0 },
    { q: " Difference between fault and update domains ", a: " 1) Azure ensures that no two resources in the same fault domain are running on the same physical hardware platform<br>2) Azure ensures that no two resources in the same update domain are updated at the same time<br>3) Azure supports up to three fault domains and up to 20 update domains ", tag: 0},
    { q: " What is the process of enabling Backup on VM? ", a: " 1) Install the agent (done automatically for VM from marketplace)<br>2) Select Virtual Machine - Backup<br>3) Recovery Services Vault - select existing or create new<br>4) Backup Policy<br>5) Enable Backup  ", tag: 0},
    { q: " Maximumn number of policies for the container?", a: " Stored access policies - 5<br>Immutable blob storage - 2 ", tag: 0 },
    { q: " What are these ports - 80, 443, 445, 3389? ", a: " 80 - HTTP<br>443 - HTTPS<br>445 - SMB<br>3389 - RDP ", tag: 0 },
    { q: " What is the rtole definition to be able to read configuration data of a storage account? ", a: " /read ", tag: 0 },
    { q: " How to use Azure Automation State Configuration? ", a: " 1. Upload a configuration to AASC<br>2. Compile configuration into a node config<br>3. Check the compliance status ", tag: 0 },
    { q: " To deploy 5 VMs scale set? ", a: " Set the scale to ScaleSetVM orchestration mode ", tag: 0 },
    { q: " Which commands are used to autoscale Kubernetes cluster? ", a: " 1) kubectl - to configure autoscaling<br>2) az aks - to enable autoscale on the node ", tag: 0 },
    { q: " What can be used in the runbook to increase the VM's processor performance at the end of the month? ", a: " DSC ", tag: 0 },
    { q: " What should be changed in the Network section for AKS to suppord Windows Server containers? ", a: " Network policy - Azure CNI ", tag: 0 },
    { q: " Which platform can use Azure Container App? ", a: " Linux only ", tag: 0 },
    { q: "  ", a: "  ", tag: 0 },
    { q: "  ", a: "  ", tag: 0 },
  ],
  Exam_Storage: [
    //storage accounts
    {q: " What is storage account access key? ", a: " When you create a storage account, Azure generates two 512-bit storage account access keys for that account ", tag: 0},
    {q: " What are two types of Performance for an account? ", a: " Standard - for general account v2<br>Premium - for Block Blob, FileShare ", tag: 0},
    {q: " What is stored access policy used for? ", a: " Start time, expire time and permision for SAS signature ", tag: 0},
    { q: " What is AzCopy?<br>Which authentication method should you use for a Blob?<br>For a file share? ", a: " AzCopy is a command-line utility that you can use to copy blobs or files to or from a storage account, Windows, Linux and macOS supported<br>Azure AD and SAS<br>Only SAS ", tag: 0 },
    { q: "  Which storage account can be used to export the data? To import data? ", a: " Export - Azure blob<br>Import - Blob and File", tag: 0 },
    { q: "  Which accounts support tiering?<br>What is RAGRS? ", a: " General Purpose v2 (GPv2) support tiring. General Purpose v1(GPv1) do not<br>Read-access geo-redunt storage - secondary storage account, more expensive solution ", tag: 0 },
    { q: " Which accounts can be turned to zone-redundant storage (ZRS)? ", a: " Standard general-purpose v2, File Share, BlockBlobStorage, Standard (Premium have to be done manually), LRS replication type ", tag: 0 },
    { q: " GRS and RA GRS replication is synchronous or asynchronous? ", a: " Asynchronous ", tag: 0 },
    { q: " Which two files should you create before using the Azure Import/Export service to copy files to a storage account? ", a: " a dataset CSV file<br>a driveset CSV file ", tag: 0 },
    { q: " Where can you copy large amounts of data? Which tool is used?", a: " Azure Files or Azure Blob, max is 5Tb. The method used is by shipping disk drives to Azure datacenter<br> The tool is Azure Import/Export ", tag: 0},
    { q: " How many replicas are created with LRS? ZRS? GRS? RA-GRS?", a: " LRS - three<br>ZRS - three<br>GRS - 3 replicas in each of two regions<br>RA-GRS - same as GRS, but you can read the second copy", tag: 0},
    { q: " Which of the following requires persistent storage - File Share, Blob, Table or Queue? ", a: " File Share ", tag: 0},
    { q: " List actions to set up Azure File Sync ", a: " 1) Deploy Storage Sync Service<br>2) Install Azure File Sync Agent<br>3) Register Windws Server with Storage Sync Service<br>4) Create sync group<br>5) Create cloud endpoint<br>6) Create a service endpoint  ", tag: 0},
    { q: " Can storage accounts exist in different locations/regions and subscriptions than backup vaults?<br>What about Log Analytics? ", a: " The location and subscription where this Log Analytics workspace can be created is independent of the location and subscription where your vaults exist.<br>Log Analytics workspaces and backup vaults have to be in the same region ", tag: 0},
    { q: " Which type of storage account supports LRS?<br>What about ZRS and GRS? ", a: " Standard general-purpose v1<br>Standard general-purpose v2 ", tag: 0 },
    { q: " What can you do with Azure Storage Explorer? ", a: " Append and add any data, create shares, but NOT create storage accounts ", tag: 0 },
    { q: " What is required for doing a backup for VMs, File Share, SQL Server?<br>For doing a backup for Azure Disks, Azure Blobs,PostgreSQL?<br>For App Service backup? ", a: " Recovery Service Vault<br>Backup Vault<br>Storage Account ", tag: 0 },
    { q: " Which mode allows for deleting all resources from the RG before deploying new ones? ", a: " Complete ", tag: 0 },
    { q: "  ", a: "  ", tag: 0 },
    
    
  ],
  
  
  Exam_Monitoring: [
    { q: " How to monitor error on a VM? ", a: " Create Azure Log Analytics - Install Microsoft Monitoring Agent on VM - Create an Alert in Microsoft Monitor and specify LogAnalytics as the source ", tag: 0 },
    { q: " Maximum number of alert emails?<br>Maximum number of alert SMS?<br>Maximum number of voice message? ", a: " Emails - 100 in an hour<br>SMS - 1 every 5 min<br>Voice - 1 call every 5 min ", tag: 0 },
    { q: "  ", a: "  ", tag: 0 },
    
  ],
  
  Exam_Network: [
    { q: "  What is a service tag? ", a: "A service tag represents a group of IP address prefixes from a given Azure service.  ", tag: 0 },
    { q: "What is private endpoint? ", a: " The private endpoint uses a separate IP address from the VNet address space. Network traffic between the clients on the VNet and the storage account traverses over the VNet and a private link on the Microsoft backbone network, eliminating exposure from the public internet. ", tag: 0 },
    { q: " Which role is required to modify DNS and other network settings? ", a: " Network Contributor ", tag: 0 },
    { q: " What needs to be done to record all succefull and failed connection attempts to VM? ", a: " 1) Enable Azure Netowork Watcher<br>2) Register Microsot.Insider resiurce provider<br>3) Enable Azure Network Watcher flow logs ", tag: 0 },
    { q: " What is DNS port #? ", a: " 53 ", tag: 0 },
    { q: " Can Azure VM be registered in a public DNS zone? ", a: " No ", tag: 0 },
    { q: " What should be recreated if you want to add address space to a VNet? ", a: " Peering ", tag: 0 },
    { q: " What needs to be done for the app to have access to VM? ", a: " It must be connected to the same VNet ", tag: 0 },
    { q: " What needs to be added to the VNet for the VM in that network to receive connection from a different network?", a: " Correct address space ", tag: 0 },
    { q: " Can one NSG be associated with different subnets and VMs?<br>Can one NSG have different rules for different sets of VMs ", a: " Yes<br>No ", tag: 0 },
    { q: " Which VMs can be balanced by the load balancer?<br>What does subnet association means for a load balancer? ", a: " Those in the same availability set<br>Which IP address will be assigned ", tag: 0 },
    { q: " Which DNS zones can you link to VNets and register VMs? ", a: " Only private ", tag: 0 },
    { q: " How to create site-to-site connection? ", a: " (Start from Azure portal):<br>1. Create gateway subnet<br>2. Create VPN gateway<br>3. Create local gateway<br>4. Create VPN connection ", tag: 0 },
    { q: " What should be enabled for packets to go from Vnet2 to Vnet3, if both are peered to VNet1? ", a: " Gateway transit ", tag: 0 },
    { q: " What is a good way to easily connect VNets?<br>What must be provisioned? ", a: " Vnet-to-VNet<br>Virtual network gateways ", tag: 0 },
    { q: " What needs to be installed on the computer for point-to-site VPN? ", a: " 1) VPN client configuration package<br>2) Client certificate ", tag: 0 },
    { q: " What needs to be done to VNets to use DNS server on one of the VNets? ", a: " To configure peering ", tag: 0 },
    { q: " Do you need NSG for VM to use it in backend pool? ", a: " Yes, otherwise all traffic is denied and load balancer would not be able to connect to it ", tag: 0 },
    { q: " In which region needs the NIC to be created? ", a: " The same as VLan ", tag: 0 },
    { q: " What does IP flow verify do? ", a: " Enables to specify source and destination IP address, ports, protocol and direction ", tag: 0 },
    { q: " How to add two VMs from different subnets to a bckend pool? ", a: " Create Standard IP addresses for both of them ", tag: 0 },
    { q: " Network Watcher features:<br>IP flow verify<br>Connection troubleshoot<br>Connection monitor<br>NSG flow logs ", a: " IP flow verify - specify source and dest IPv4, port, protocol and direction<br>Connection troubleshoot - test connection at a point of time<br>Connection monitor - test connection at regular intervals<br>NSG flow logs -whether traffic was allowed ", tag: 0 },
    { q: " All trafic to go from VPN gateway to VNet via VM ", a: " Address prefix - VNet<br>Next hop - Virtual appliance (which is VM)<br>Assigned to VPN gateway ", tag: 0 },
    { q: " Can you create LB without a frontend IP address?<br>Wihtout backend pool?<br>Without the health probe? ", a: " No<br>Yes<br>Yes ", tag: 0 },
    { q: " Which DNS server is used? ", a: " Either the Default (Azure-provided) or customly specified ", tag: 0 },
    { q: " Are all connections between VMs on VLan allowed by default?  ", a: " Yes ", tag: 0 },
    { q: " Does routing table has precedence before the system routes between subnets? ", a: " Yes. If VM which is next hop in RT is turned off, the connection will not happen ", tag: 0 },
    { q: " What needs to be used for the web app to connect to on-prem share? ", a: " Azure Virtual Network Gateway ", tag: 0 },
    { q: "  ", a: "  ", tag: 0 },
    
  ],

  Miscellanious: [
    { q: " Command to copy content of a folder to the contaniner ", a: " az copy d:\folder https://containername ¬ recursive ", tag: 0 },
    { q: " Which key should be used to for a custom-managed encryption? ", a: " RSA key with 2048, 3072, 4096 encryption ", tag: 0 },
    { q: " Which storage support SMB Multichannel? ", a: " LRS ", tag: 0 },
    { q: " What needs to be changed to minimize network cost?<br>What can you modfify after account creation?  ", a: " Performance<br>Enable support for cutomer-managed keys ", tag: 0 },
    { q: " How to ensure that no data is lost if a host fails? ", a: " To set up host caching to Read/Write ", tag: 0 },
    { q: " How to ensure the user can dowloan blobs by name? ", a: " Select Object in SAS ", tag: 0 },
    { q: " Which accounts can be converted to ZRS? ", a: " Standart V2, Premium BlockBlob or Premium File Share ", tag: 0 },
    { q: " Which paramter in SAS should be on to list blobs in the container? ", a: " Read for the comtainer ", tag: 0 },
    { q: " Can the object be transfered from Archive to Cool tier? ", a: " No, it should go to Hot first ", tag: 0 },
    { q: " Deploy YAML file to Azure Kubernetes ", a: " kubectl client ", tag: 0 },
    { q: " What needs to be modified in the Template to deploy a VM to the specific region? ", a: " Location in the resources ", tag: 0 },
    { q: " What to use to deploy app to Kubernetes cluster? ", a: " Build and push the container image to Container Registry - az acr build ", tag: 0 },
    { q: " What to do first if you want to do a backup to a different VM? ", a: " Install Mixrosoft Azure Recovery Services Agent on that VM ", tag: 0 },
    { q: " What should ARM contain for a type to join VM to domain? ", a: " virtualMachines/extensions ", tag: 0 },
    { q: " Which platforms support multi-containeer groups? ", a: " Only Linux ", tag: 0 },
    { q: " Which IPs can be used for Azure Firewall? ", a: " Static, Standard and IPv4 ", tag: 0 },
    { q: " Can you create new VM if Not Allowed has VirtualMAchines? ", a: " No ", tag: 0 },
    { q: " What needs to be used to move DNS zone to a different subsciption? ", a: " Azure PowerShell ", tag: 0 },
    { q: " How to include VM into Application security group? ", a: " Associate NIC to ASG ", tag: 0 },
    { q: " What should be used to validate connectivity in Azure Network Watcher? ", a: " Connection troubleshooting ", tag: 0 },
    { q: " What can be used to ping a VM? ", a: " A record only ", tag: 0 },
    { q: " What to configure to restrict traffic between pods? ", a: " the Calico network policy ", tag: 0 },
    { q: " Which SKU supports FastPath? ", a: " ErGw3AZ ", tag: 0 },
    { q: "  ", a: "  ", tag: 0 },
  ],
  
  EntraID: [
    { q: "Three types of user accounts", a: "1) Cloud<br>2) Directory synchronized<br>3) Guest user", tag: 0 },
    { q: "Three templates to create cloud user", a: "1) Create user<br>2) Invite user<br>3) Create B2C user", tag: 0 },
    { q: "Who can preset data for the cloud user?", a: "Global administrator or User administrator", tag: 0 },
    { q: "Which two names does the user account have?", a: "1) Display name - Viktor Hulei<br>2) User principal name vikhulei@fixitfast.com", tag: 0 },
    { q: "How many days before cloud user account is permanently deleted?", a: "30 days", tag: 0 },
    { q: "How to view errors when creating bulk accounts?", a: "Bulk operation results page in the Azure portal", tag: 0 },
    { q: "What are security group account used for?", a: "To manage member and computer access to shared resources", tag: 0 },
    { q: "What are Microsoft 365 group accounts used for?", a: "To provide access to shared mailboxes, calendars, files, SharePoint sites and more<br>Access for guest users", tag: 0 },
    { q: "Who can implement security groups and MS365 groups?", a: "Security groups - Microsoft Entra admin<br>MS365 - normal users and Microsoft Entra admins", tag: 0 },
    { q: "What are three ways to add members to the groups?", a: "Assigned - add specific users<br>Dynamic - depends on member's attribute<br>Dynamic device (only for security group) - depends on the device's attribute", tag: 0 },
    { q: "What is admin unit used for?<br>What can you use to manage admin units?<br>Who can manage AUs?", a: "Admin units are used to assign management permissions to the users<br>Azure portal, PowerShell, Graph API, Microsoft 365 admin center can be used<br> Global Admin or Privileged Role Admin can manage AUs", tag: 0 },
    { q: "	What is:<br>Identity<br>Account<br>Microsoft Entra account<br>Azure Tenant<br>Azure subscription	", a: "	Identity - object with username and password<br>Account - identity that has data<br>Entra account is created with Entra ID or MS365<br>Tenant represents organization<br>Subscription is used to pay for services	", tag: 0 },
    { q: "	What is:<br>Identity<br>Account<br>Microsoft Entra account<br>Azure Tenant<br>Azure subscription	", a: "	Identity - object with username and password<br>Account - identity that has data<br>Entra account is created with Entra ID or MS365<br>Tenant represents organization<br>Subscription is used to pay for services	", tag: 0 },
    { q: "	ADDS vs Entra: communication protocols, federation services, structure, what is managed	", a: "	Protocols - no Kerberos, HTTPS (SAML, WS-F, OAuth)<br>Federation services and 3rd party (Facebook...)<br>Flat structure - no OUs and GPOs<br>Only users, groups and policies are managed	", tag: 0 },
    { q: "	Three Microsoft Entra editions	", a: "	Free - 500 th. objects, SSO, Core Identity & Access management, B2B colaboration<br>P1 - Everything else except Identity Protection and Identity Governance<br>P2 - Everything	", tag: 0 },
    { q: "	Which account is used to manage SSPR feature?<br>What are the three options to apply for users who can reset passwords?	", a: "	Global administrator account<br>None, Selected, All	", tag: 0 },
  ],
  UsersAndGroups: [
    { q: "	Can Entra member users invite guest users by default?<br>Who can change that default?	", a: "	Yes<br>Someone with User Administrator role	", tag: 0 },
    { q: "	What happens when the user account is deleted?<br>How do you create a new user in Azure CLI?<br>In Azure PowerShell?	", a: "	It remains suspended for 30 days<br>az ad user create<br>New-MgUser	", tag: 0 },
    { q: "	What are three ways to assign access rights to users or groups?	", a: "	Direct assignment<br>Group assignment<br>Rule-based assignment (group membership depends if the rules are met)	", tag: 0 },
  ],
  Subscriptions: [
    { q: "	How many regions in how many countries are there?<br>What is the minimal distance between datacenters?<br>Which regions are paired and are not in the same geography?	", a: "	60 regions in 140 countries<br>At least 300 miles of separation is prefered<br>Brazil South and Singapore are paired but are not in the same geography	", tag: 0 },
    { q: "	Four ways to obtain Azure subscription	", a: "	Enterprise agreement<br>Microsoft reseller<br>Microsoft partner<br>Personal free account	", tag: 0 },
    { q: "	Four most popular types of Azure subscription	", a: "	Free, Pay-As-You-Go, Enterprise Agreement, and Student	", tag: 0 },
    { q: "	Explain Microsoft Cost Management analysis	", a: "	Microsoft Cost Management cost analysis features explores and analyses your organizational costs. You can monitor accumulated costs over time to estimate monthly, quarterly, or even yearly cost trends against a budget	", tag: 0 },
    { q: "	What are tags used for? What are two parts of a tag? What is the maximum number of tags per resource?", a: "Tags are useful for sorting, searching, managing, and doing analysis on your resources.<br>Name/value pair<br>50	", tag: 0 },
    { q: "	Explain Reservations as cost saving option. How much can you save?	", a: "	Reservation is saving money by paying ahead. Can save up to 72%	", tag: 0 },
    { q: "	What is Azure Credit?<br>How can you save with Azure regions?<br>What can you use to provide estimates for all areas, including compute, networking, storage, web?	", a: "	Use the monthly credit benefit to develop, test, and experiment with new solutions on Azure<br>Pricing can vary from one region to another<br>Pricing calculator	", tag: 0 },
  ],
  AzurePolicy: [
    { q: "	What is management group?<br>How deep is the management group tree?	", a: "	It is a container to manage access, policy, and compliance across the subscriptions.<br>A management group tree can support up to six levels of depth	", tag: 0 },
    { q: "	What is used to create management groups?<br>Which two properties are set when creating management group?	", a: "	 Azure portal, PowerShell, or the Azure CLI with the Azure Policy<br>Management group ID and management group display name	", tag: 0 },
    { q: "	What is Azure Policy?	", a: "	Azure Policy is a service in Azure that you can use to create, assign, and manage policies. You can use policies to enforce rules on your resources to meet corporate compliance standards	", tag: 0 },
    { q: "	Four things Azure policies can be used for	", a: "	Deployable resources (specify the set of virtual machine SKUs)<br>Location restrictions<br>Rules enforcement (enforce a required tag on resources)<br>Inventory audits (use Azure Backup service and run inventory audits)	", tag: 0 },
    { q: "	4 steps to create Azure policy	", a: "	Step 1: Create policy definitions;<br>Step 2: Create an initiative definition;<br>Step 3: Scope the initiative definition;<br>Step 4: Determine compliance	", tag: 0 },
    { q: "	Two examples of built-in policy definitions	", a: "	Allowed virtual machine size SKUs: Specify a set of VM size SKUs (compute cat.)<br>Allowed locations: Restrict the locations (General cat.)	", tag: 0 },
    { q: "	Two examples of built-in initiative definitions	", a: "	Audit machines with insecure password security settings (Guest configuration cat.)<br>Configure Azure Defender to be enabled on SQL servers (SQL cat.)	", tag: 0 },
    { q: "	Which two option have to be selected when determining the initiative definition scope?	", a: "	1) Subscription 2) Resource group	", tag: 0 },
    { q: "	What do we use Compliance feature for?	", a: "	We use the Compliance feature to look for non-compliant initiatives, policies, and resources	", tag: 0 },
  ],
  RBAC: [
    { q: "	What is the definition and examples of security principals?<br>What are some built-in role definitions?How many of them are there?	", a: "	Object that requests access to resources. E.g. - user, group, service principal, managed identity<br>Some built-in role definitions: Reader, Contributor, Owner, User Access Administrator. Over 100 roles	", tag: 0 },
    { q: "	What is an example of a role assignment?<br>What is the definition and examples of the scopes?	", a: "	Assign the User Access Administrator role to an admin group scoped to a management group<br>Boundary where the access is granted - management group, subscription, resource group, resource	", tag: 0 },
    { q: "	Four sets of RBAC permissions in JSON file<br>What is the highest built-in role?	", a: "	Actions, NotActions, DataActions (how data can be changed or used), AssignableScopes<br>Owner	", tag: 0 },
    { q: "	What is Actions permission for Reader role?<br>What is NotActions permission for Contributor?	", a: "	/*/read<br>- Microsoft.Authorization/*/Delete, - Microsoft.Authorization/*/Write	", tag: 0 },
    { q: "	Which two parts are composing effective permissions?	", a: "	Permissions for the requestor's roles + permissions for the role asigned to the resource	", tag: 0 },
    { q: "	Azure RBAC roles vs Microsoft Entra admin roles	", a: "	Entra admin roles are used to manage resources in Microsoft Entra ID, such as users, groups, and domains<br>Azure RBAC roles provide more granular access management for Azure resources	", tag: 0 },
    { q: "	Describe the roles of Owner, Contributor, Reader and User Access Administrator	", a: "	Owner - full access<br>Contributor - can create, cannot delete/modify, cannot grant access to others<br>Reader - can view existing resources<br>User Access - can manage user access to resources	", tag: 0 },
  ],
  ToolsAndRM: [
    { q: "	What three things are required to Azure Cloude Shelll?<br>Name of the editor in Azure Cloud Shell?<br>How many min before it turns off?	", a: "	Azure File share, resource group and storage account<br>Monaco Editor<br>20 min	", tag: 0 },
    { q: "	What is Azure PowerShell?	", a: "	Azure PowerShell is a module that you add to Windows PowerShell or PowerShell Core to enable you to connect to your Azure subscription and manage resources	", tag: 0 },
    { q: "	What is Azure CLI?<br> What do you use to find the command you need?	", a: "	Azure CLI is a command-line program to connect to Azure and execute administrative commands on Azure resources.<br> 1) find: az find blob 2) --help: az storage blob --help	", tag: 0 },
    { q: "	Can the same resource exist in multiple resource groups?<br>Can you rename a resource group?<br>CAn you have resources from several regions in 1 group?	", a: "	No<br>No<br>Yes	", tag: 0 },
    { q: "	What are two types of resource locks?<br>Who can create or delete management locks?	", a: "	Read-only lock and Delete lock<br>Owner or User Access Administrator	", tag: 0 },
    { q: "	Two limitations for moving resource groups	", a: "	1) You can't move child group without moiving parent group<br>2) Usually you need to move depended resources - in case of moving the network, you also need to move gateways	", tag: 0 },
    { q: "	What do you do if you need to increase a default limit for your resource?	", a: "	There is a Request Increase link	", tag: 0 },
    { q: "	What is Azure Bicep?	", a: "	Azure Bicep is a domain-specific language (DSL) that uses declarative syntax to deploy Azure resources	", tag: 0 },
  ],
  NSG: [
    { q: "	What are the 5 reserved ip addresses of the subnet 192.168.10.0/24?	", a: "	192.168.10.0 - address of the network<br>192.168.10.1 - default gateway<br>192.168.10.2 and 192.168.10.3 - Azure DNS<br>192.168.10.255 - broadcast address	", tag: 0 },
    { q: "	Do you need to define at least one subnet for each Virtual Network?	", a: "	Yes	", tag: 0 },
    { q: "	How many NSG can be associated with a network or NIC?<br>How many NICs can be associated with a single security group?	", a: "	A network security group can be associated to multiple network interfaces and subnets, but each network interface or subnet can be associated to only one network security group	", tag: 0 },
    { q: "	Which 5 settings are defined for a security group?	", a: "	5-tuple: protocol, source IP address range, source port range, destination IP address range, and destination port range	", tag: 0 },
    { q: "	In which order the NSGs are applied for inbound traffic?<br>For outbound traffic?	", a: "	Inbound - subnets first (has precedence), then network interfaces<br>Outbound - NSG applied to NIC has precedence, then NSG associated with subnets are applied	", tag: 0 },
    { q: "	What is a good practice for security rules priority numbering?	", a: "	It is to leave gaps with numbering such as 100, 200, 300 and so on - this will allow to add new rules in between	", tag: 0 },
    { q: "	Which rule takes precedence - priority 150 or priority 200?<br>Is traffic denied or allowed by default?	", a: "	150<br>Denied by default	", tag: 0 },
  ],
  DNS: [
    { q: "	What is the initial domain name, created by Azure by default?<br>When is it created?	", a: "	yourdomainname.onmicrosoft.com<br>When you create an Azure subscription, Azure automatically creates a Microsoft Entra domain for your subscription	", tag: 0 },
    { q: "	User with what role can perform domain management tasks?<br>Which user has this role?	", a: "	You must be a global administrator to perform domain management tasks.<br>The global administrator is the user who created the subscription.	", tag: 0 },
    { q: "	How to verify your custom domain name?	", a: "	By adding MX or TXT DNS record for your custom domain name	", tag: 0 },
    { q: "	Explain 9 DNS records: (ip, canonic name, secondary, server, service)	", a: "	A - IPv4 to name; AAAA - IPv6 to name; CNAME - name to name;  SOA (Start of Authority) - to  secondary name servers; NS (Name Server) - authoritative name servers; MX - mail servers;  TXT - notes for verification;  SRV - services directed to separate host;  PTR - a reverse of A and AAAA	IPv4", tag: 0 },
  ],
  TheRest1: [
    { q: "	What is Azure DNS zone?<br>What must be specified to create a DNS zone?	", a: "	An Azure DNS zone hosts the DNS records for a domain<br>In the portal, you specify the DNS zone name, number of records, resource group, zone location, associated subscription, and DNS name servers	", tag: 0 },
    { q: "	Can multiple DNS zones have the same name?	", a: "	Multiple DNS zones can have the same name, but the DNS zones must exist in different resource groups or in different Azure subscriptions.	", tag: 0 },
    {q: "	Three steps to delegate DNS domain on the registrar	", a: "	Go to your registrar DNS management page.<br>Find the existing NS records for your parent domain.<br>Replace the existing NS records with the NS records created for your domain by Azure DNS.	", tag: 0},
    { q: "	Three steps to delegate subdomain for the domain in Azure	", a: "	Go to the parent DNS zone for your domain in the Azure portal.<br>Find the existing NS records for your parent domain.<br>Create new NS records for your child DNS zone (subdomain).	", tag: 0 },
    { q: "	Which two things must be identical in DNS record set?	", a: "	Same name and same record type	", tag: 0 },
    { q: "	What is Azure Private DNS zones?	", a: "	The records contained in a private DNS zone aren't resolvable from the Internet. DNS resolution against a private DNS zone works only from virtual networks that are linked to it.	", tag: 0 },
    { q: "	Four components for a load balancer	", a: "	To implement a load balancer, you configure four components:<br>Front-end IP configuration<br>Back-end pools<br>Health probes<br>Load-balancing rules	", tag: 0 },
    { q: "	Three Azure Load Balancer SKUs	", a: "	The Standard SKU offers an expanded and more granular feature set than the Basic SKU: +https, multiple inbound, availability zones, closed by default, 1000 pools<br>The Gateway SKU works with third-party network virtual appliances.	", tag: 0 },
    { q: "	What is load balancer back-end pool?	", a: "	The back-end pools contain the IP addresses of the virtual NICs that are connected to your load balancer	", tag: 0 },
    { q: "	How does HTTP probe work on a load balancer?<br>How does a TCP probe work?	", a: "	HTTP probe - 200 message response every 15 sec<br>TCP probe - if the listener exists to establish TCP session	", tag: 0 },
    { q: "	What is the difference between Application Gateway and Azure Load Balancer?	", a: "	Application Gateway can target endpoints in other Azure regions and outside Azure, unlike Load Balancer, which works with VMs in the same virtual network	", tag: 0 },
    { q: "	Blob Storage uses three resources to store and manage your data:	", a: "	An Azure storage account <br>Containers in an Azure storage account<br>Blobs in a container	", tag: 0 },
    { q: "	Public access tiers	", a: "	Hot - frequent reads;<br>Cool - large amounts infrequently accessed, remains for at least 30 days;<br>Cold - remains for at least 90 days;<br>Archive - one that can tolerate several hours of retrieval latency	", tag: 0 },
    { q: "	What should be enabled for blob replication?<br>What is not supported<br>Which tiers are supported?	", a: "	Blob versioning<br>Snapshots<br>Hot, Cool and Cold	", tag: 0 },
    { q: "	What is shared access signature?<br>When it is used?	", a: "	A SAS gives you granular control over the type of access you grant to clients who have the SAS. You can specify the time interval for which a SAS is valid<br>SAS is a secure way to share your storage resources without compromising your account keys	", tag: 0 },
    { q: "	What is Azure Virtual Machine Scale Set?	", a: "	Virtual Machine Scale Sets automatically increases the number of your virtual machine instances as application demand increases, and reduces the number of machine instances as demand decreases	", tag: 0 },
    { q: "	How do applications run on Free or Shared tier in App Service plans?	", a: "	Applications run on a shared virtual machine instance<br>Applications can't scale out	", tag: 0 },
    { q: "	How do applications run on Basic, Standard, Premium, or Isolated tier in App Service plans?	", a: "	Applications run on all virtual machine instances configured in the App Service plan<br>Multiple applications in the same plan share the same virtual machine instances	", tag: 0 },
    { q: "	Which three access tiers where the backups could be stored are available?	", a: "	Snapshot tier<br>Standard tier<br>Archive tier	", tag: 0 },
  ],

};

export default Questions;
