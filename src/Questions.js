const Questions = {
  Exam: [
    {q: "What is a firewall?", a: "Means of control the network flow", tag: 0},
    {q: " Evolution of firewalls ", a: " Stateless, stateful, third-generation, next generation ", tag: 0},
    {q: "What is the first-generation firewall?", a: "Called statless. Checks packets, if source and destination address, protocol and port numbers are matching", tag: 0},
    {q: "What is the second-generation firewall?", a: "Staefull. Continusly monitors connections. Uses 5-tuple: source & dest IP addr and port, and protocol ", tag: 0},
    {q: "What is the third-generation firewall?", a: "Statfull. Looks deeper into the data payload. Can distinguish between blog, email, E-commerce etc.", tag: 0},
    {q: "What is next-generation firewall?", a: "It has 3 lines defence:<br>1) Packets, rule-base decisions<br>2)Deep packet inspection<br>3) Malicious content are sent to sandbox for ruther analysis", tag: 0},
    {q: "What three things does latest firewall need to provide?", a: "1) Security<br?2) Reliability<br>3) Network performance", tag: 0},
    {q: "", a: "", tag: 0},
  ]
};

export default Questions;
