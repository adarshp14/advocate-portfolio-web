
import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ConsultationButton from '../components/ConsultationButton';

const blogData = {
  "how-to-find-best-lawyer-kolkata": {
    title: "How to Find the Best Lawyer in Kolkata",
    date: "August 15, 2023",
    author: "Muhammad Obaid",
    image: "https://images.unsplash.com/photo-1589394101658-49c8ae636826?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    categories: ["Legal Advice", "Kolkata"],
    content: `
      <p class="mb-4">Finding the right lawyer in Kolkata can be a crucial decision that significantly impacts the outcome of your legal matter. With hundreds of practicing advocates in the city, making an informed choice requires careful consideration of several factors.</p>
      
      <h2 class="text-2xl font-bold text-lawyer-navy mb-4 mt-8">1. Identify Your Legal Needs</h2>
      <p class="mb-4">Before beginning your search, clearly define the legal issue you're facing. Different lawyers specialize in different areas of law such as civil litigation, criminal defense, family law, or corporate matters. At the Calcutta High Court, many advocates focus on specific practice areas.</p>
      <p class="mb-4">A lawyer who primarily handles civil cases may not be the best choice for criminal defense. In Kolkata's legal landscape, specialization is increasingly common, with many advocates dedicating their practice to particular courts or legal domains.</p>
      
      <h2 class="text-2xl font-bold text-lawyer-navy mb-4 mt-8">2. Research Experience and Credentials</h2>
      <p class="mb-4">Look for lawyers with significant experience in handling cases similar to yours. Check their educational background, years of practice, and whether they regularly appear before the relevant courts in Kolkata, such as the Calcutta High Court or district courts in Howrah.</p>
      <p class="mb-4">An experienced advocate will have developed relationships within the court system and gained invaluable insights into how specific judges approach certain legal issues. This institutional knowledge can be extremely beneficial to your case.</p>
      
      <h2 class="text-2xl font-bold text-lawyer-navy mb-4 mt-8">3. Seek Recommendations</h2>
      <p class="mb-4">Personal recommendations from friends, family, or business associates who have faced similar legal issues can be valuable. Additionally, other legal professionals might provide referrals to lawyers who specialize in your specific area of need.</p>
      <p class="mb-4">In Kolkata's close-knit legal community, reputation matters significantly. A lawyer who is respected by peers and has a good standing with the bar association is likely to provide effective representation.</p>
      
      <h2 class="text-2xl font-bold text-lawyer-navy mb-4 mt-8">4. Evaluate Communication Style</h2>
      <p class="mb-4">Effective communication between you and your lawyer is essential. During initial consultations, assess whether the lawyer explains legal concepts clearly, listens to your concerns, and responds promptly to your questions.</p>
      <p class="mb-4">Your lawyer should be accessible and keep you informed about developments in your case. This is particularly important in the sometimes complicated procedures of the Calcutta High Court, where having a clear understanding of proceedings is crucial.</p>
      
      <h2 class="text-2xl font-bold text-lawyer-navy mb-4 mt-8">5. Consider Fees and Payment Structure</h2>
      <p class="mb-4">Understand how a lawyer charges for their services. Some may charge hourly rates, while others might work on a fixed fee or contingency basis, depending on the nature of your case. In Kolkata, fee structures can vary widely between different advocates and types of cases.</p>
      <p class="mb-4">Be wary of lawyers who make unrealistic promises or quote fees significantly lower than others. Quality legal representation is an investment, and extremely low fees might indicate inexperience or lack of thorough attention to your case.</p>
      
      <h2 class="text-2xl font-bold text-lawyer-navy mb-4 mt-8">6. Assess Resources and Support</h2>
      <p class="mb-4">Complex cases often require substantial resources. Consider whether a lawyer has access to necessary research tools, support staff, and expert witnesses when needed. This is particularly relevant for cases in the Calcutta High Court, which might involve complicated legal research and documentation.</p>
      
      <h2 class="text-2xl font-bold text-lawyer-navy mb-4 mt-8">Conclusion</h2>
      <p class="mb-4">Taking the time to find the right lawyer in Kolkata is crucial for achieving a favorable outcome in your legal matter. By considering specialization, experience, reputation, communication style, fees, and available resources, you can make an informed decision that serves your best interests.</p>
      <p class="mb-4">Remember that the lawyer-client relationship is built on trust and mutual respect. The right advocate will not only provide legal expertise but also guide you through what can often be a stressful and confusing process with professionalism and clarity.</p>
    `
  },
  "civil-litigation-laws-india-explained": {
    title: "Key Civil Litigation Laws in India Explained",
    date: "September 22, 2023",
    author: "Muhammad Obaid",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    categories: ["Civil Law", "Legal Education"],
    content: `
      <p class="mb-4">Civil litigation in India encompasses a wide range of disputes between individuals, businesses, and other entities. Understanding the fundamental laws that govern civil proceedings is essential for anyone involved in or contemplating legal action in Indian courts.</p>
      
      <h2 class="text-2xl font-bold text-lawyer-navy mb-4 mt-8">The Code of Civil Procedure (CPC), 1908</h2>
      <p class="mb-4">The Code of Civil Procedure is the primary legislation that governs civil litigation in India. It provides the procedural framework for civil courts to administer justice between parties. The CPC outlines:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Jurisdiction of courts and filing procedures</li>
        <li class="mb-2">Summons and discovery processes</li>
        <li class="mb-2">Trial procedures and evidence rules</li>
        <li class="mb-2">Judgment and decree execution</li>
        <li class="mb-2">Appeals and review mechanisms</li>
      </ul>
      <p class="mb-4">In the Calcutta High Court and district courts across West Bengal, strict adherence to CPC procedures is essential for successful litigation. Procedural errors can significantly delay proceedings or even result in dismissal of cases.</p>
      
      <h2 class="text-2xl font-bold text-lawyer-navy mb-4 mt-8">The Indian Contract Act, 1872</h2>
      <p class="mb-4">A substantial portion of civil litigation involves contract disputes. The Indian Contract Act governs the formation and enforcement of contracts, outlining:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Requirements for valid contracts</li>
        <li class="mb-2">Consequences of breach of contract</li>
        <li class="mb-2">Remedies available to the aggrieved party</li>
        <li class="mb-2">Special provisions for indemnity, guarantee, and agency</li>
      </ul>
      <p class="mb-4">Contract disputes form a significant percentage of civil cases in Kolkata's courts, particularly in the commercial divisions where business agreements are frequently contested.</p>
      
      <h2 class="text-2xl font-bold text-lawyer-navy mb-4 mt-8">The Specific Relief Act, 1963</h2>
      <p class="mb-4">This Act provides for specific remedies when monetary compensation is inadequate. Key provisions include:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Recovery of possession of property</li>
        <li class="mb-2">Specific performance of contracts</li>
        <li class="mb-2">Rectification and cancellation of instruments</li>
        <li class="mb-2">Declaratory decrees and injunctions</li>
      </ul>
      <p class="mb-4">The Specific Relief Act is particularly relevant in property disputes, which are common in both urban and rural areas of West Bengal.</p>
      
      <h2 class="text-2xl font-bold text-lawyer-navy mb-4 mt-8">The Limitation Act, 1963</h2>
      <p class="mb-4">This Act prescribes time limits within which various suits, appeals, and applications must be filed. Understanding limitation periods is crucial as courts are generally strict about enforcing these timeframes.</p>
      <p class="mb-4">Different types of civil actions have different limitation periods, ranging from months to years depending on the nature of the claim. Missing a limitation deadline can permanently bar your right to legal remedy.</p>
      
      <h2 class="text-2xl font-bold text-lawyer-navy mb-4 mt-8">The Evidence Act, 1872</h2>
      <p class="mb-4">This Act governs how facts are established in civil and criminal proceedings. It covers:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Relevance and admissibility of evidence</li>
        <li class="mb-2">Burden of proof</li>
        <li class="mb-2">Witness testimony and documentary evidence</li>
        <li class="mb-2">Presumptions and estoppel</li>
      </ul>
      <p class="mb-4">Strong evidence presentation is often the determining factor in civil cases across Kolkata and Howrah courts.</p>
      
      <h2 class="text-2xl font-bold text-lawyer-navy mb-4 mt-8">Alternative Dispute Resolution</h2>
      <p class="mb-4">India's legal system increasingly encourages alternative dispute resolution (ADR) methods to reduce court backlog. The Arbitration and Conciliation Act, 1996 provides the legal framework for:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Arbitration proceedings</li>
        <li class="mb-2">Conciliation processes</li>
        <li class="mb-2">Enforcement of arbitral awards</li>
      </ul>
      <p class="mb-4">In Kolkata's commercial landscape, arbitration clauses are becoming standard in many contracts, allowing for potentially faster resolution outside traditional court proceedings.</p>
      
      <h2 class="text-2xl font-bold text-lawyer-navy mb-4 mt-8">Conclusion</h2>
      <p class="mb-4">Civil litigation in India operates within a complex framework of laws and procedures. Success in civil disputes requires not only understanding substantive rights but also navigating procedural requirements correctly.</p>
      <p class="mb-4">For those involved in civil matters in Kolkata, Howrah, or elsewhere in West Bengal, consulting with an experienced advocate familiar with both substantive law and local court practices can significantly impact case outcomes.</p>
    `
  },
  "avoid-legal-mistakes-kolkata-howrah": {
    title: "Avoid These Legal Mistakes in Kolkata and Howrah",
    date: "October 10, 2023",
    author: "Muhammad Obaid",
    image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    categories: ["Legal Tips", "Risk Management"],
    content: `
      <p class="mb-4">Legal issues can arise unexpectedly, but many common problems can be avoided with proper awareness and precaution. For residents and businesses in Kolkata and Howrah, understanding potential legal pitfalls specific to the region can save considerable time, money, and stress.</p>
      
      <h2 class="text-2xl font-bold text-lawyer-navy mb-4 mt-8">1. Property Transaction Mistakes</h2>
      <p class="mb-4">Property disputes are among the most common legal issues in Kolkata and Howrah. When purchasing property, avoid these critical mistakes:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2"><strong>Inadequate title verification:</strong> Always conduct a thorough title search going back at least 30 years to verify clear ownership.</li>
        <li class="mb-2"><strong>Skipping encumbrance checks:</strong> Ensure the property is free from mortgages, liens, or other encumbrances.</li>
        <li class="mb-2"><strong>Ignoring municipal approvals:</strong> Verify that all constructions have proper approvals from the Kolkata Municipal Corporation or Howrah Municipal Corporation.</li>
        <li class="mb-2"><strong>Incomplete documentation:</strong> Ensure all documents are properly executed, stamped, and registered at the appropriate Sub-Registrar's office.</li>
      </ul>
      <p class="mb-4">In West Bengal, land records are particularly complex due to historical factors and evolving land reform legislation. Professional legal assistance is essential for property transactions.</p>
      
      <h2 class="text-2xl font-bold text-lawyer-navy mb-4 mt-8">2. Business Compliance Failures</h2>
      <p class="mb-4">Businesses in Kolkata and Howrah must comply with multiple regulatory frameworks:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2"><strong>Trade license neglect:</strong> Operating without a valid trade license from municipal authorities can result in penalties or closure.</li>
        <li class="mb-2"><strong>GST compliance issues:</strong> Improper GST registration, filing, or payment can lead to substantial penalties.</li>
        <li class="mb-2"><strong>Labor law violations:</strong> West Bengal has specific labor regulations that must be followed regarding working hours, minimum wages, and employee benefits.</li>
        <li class="mb-2"><strong>Environmental clearances:</strong> Many businesses require pollution control board clearances, particularly in industrial areas of Howrah.</li>
      </ul>
      <p class="mb-4">Proactive compliance is always less expensive than addressing violations after they occur.</p>
      
      <h2 class="text-2xl font-bold text-lawyer-navy mb-4 mt-8">3. Tenancy Agreement Problems</h2>
      <p class="mb-4">Rental disputes are common in urban areas of West Bengal. Avoid these mistakes:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2"><strong>Verbal agreements:</strong> Always document tenancy terms in a written agreement.</li>
        <li class="mb-2"><strong>Insufficient documentation:</strong> Clearly specify rent amount, security deposit, maintenance responsibilities, and notice periods.</li>
        <li class="mb-2"><strong>Registration failure:</strong> Tenancy agreements exceeding 11 months should be registered to be legally enforceable.</li>
        <li class="mb-2"><strong>Tenant verification neglect:</strong> Failing to verify tenant identity and background can create security and legal issues later.</li>
      </ul>
      <p class="mb-4">The West Bengal Premises Tenancy Act provides specific protections and obligations for both landlords and tenants that must be understood and followed.</p>
      
      <h2 class="text-2xl font-bold text-lawyer-navy mb-4 mt-8">4. Consumer Dispute Mishandling</h2>
      <p class="mb-4">Consumer rights awareness has increased significantly in Kolkata and Howrah. Businesses should:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2"><strong>Maintain transparent pricing:</strong> All charges should be clearly communicated.</li>
        <li class="mb-2"><strong>Honor warranties:</strong> Documented warranties must be respected to avoid consumer forum complaints.</li>
        <li class="mb-2"><strong>Respond to grievances:</strong> Establish a clear customer grievance redressal system.</li>
        <li class="mb-2"><strong>Retain documentation:</strong> Keep records of all customer transactions and communications.</li>
      </ul>
      <p class="mb-4">The Consumer Protection Act of 2019 has strengthened consumer rights and increased penalties for non-compliance, making proactive compliance more important than ever.</p>
      
      <h2 class="text-2xl font-bold text-lawyer-navy mb-4 mt-8">5. Traffic Violation Consequences</h2>
      <p class="mb-4">With increasing traffic enforcement in Kolkata and Howrah, be aware of:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2"><strong>E-challan system:</strong> Traffic violations are increasingly captured electronically, with notices sent directly to the vehicle owner.</li>
        <li class="mb-2"><strong>Enhanced penalties:</strong> Recent amendments to the Motor Vehicles Act have substantially increased fines for violations.</li>
        <li class="mb-2"><strong>Cascading consequences:</strong> Unpaid challans can result in non-renewal of vehicle registration or driving license.</li>
      </ul>
      <p class="mb-4">Always carry valid documentation while driving and stay updated on traffic regulations that frequently change in urban areas.</p>
      
      <h2 class="text-2xl font-bold text-lawyer-navy mb-4 mt-8">Conclusion</h2>
      <p class="mb-4">Legal mistakes often occur due to lack of awareness or attempts to cut corners. In the complex legal environment of Kolkata and Howrah, proper documentation, regulatory compliance, and professional guidance are essential preventive measures.</p>
      <p class="mb-4">When legal issues do arise, addressing them promptly with proper legal counsel can prevent escalation and minimize potential damages. Prevention through awareness remains the most cost-effective legal strategy for individuals and businesses alike.</p>
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogData[slug as keyof typeof blogData];
  
  useEffect(() => {
    if (!post) {
      navigate('/blog');
      return;
    }
    
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal');
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('animate-fade-in');
          element.classList.remove('opacity-0');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    // Scroll to top when blog post loads
    window.scrollTo(0, 0);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post, navigate]);
  
  if (!post) return null;
  
  return (
    <>
      <Helmet>
        <title>{post.title} | Muhammad Obaid - Lawyer in Kolkata</title>
        <meta name="description" content={`${post.title} - Legal insights from Muhammad Obaid, Advocate at Calcutta High Court. Expert advice for residents and businesses in Kolkata and Howrah.`} />
        <link rel="canonical" href={`/blog/${slug}`} />
      </Helmet>
      
      {/* Hero Section with adjusted padding to account for fixed header */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: `url('${post.image}')`,
            backgroundPosition: 'center 30%',
            height: '50%'
          }}
        />
        <div className="absolute inset-0 bg-lawyer-navy bg-opacity-70" style={{ height: '50%' }}></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {post.categories.map((category, index) => (
              <span key={index} className="text-xs font-medium bg-white bg-opacity-20 text-white px-3 py-1 rounded-full">
                {category}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in">
            {post.title}
          </h1>
          <div className="flex items-center justify-center text-white mb-8">
            <img 
              src="/lovable-uploads/96b51200-5773-42b6-ad91-3ba7c7d42bd0.png" 
              alt={post.author} 
              className="w-10 h-10 rounded-full object-cover mr-3"
            />
            <span className="mr-3">{post.author}</span>
            <span className="text-gray-300">|</span>
            <span className="ml-3">{post.date}</span>
          </div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-16 -mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-6 md:p-10 opacity-0 reveal">
            <article className="prose prose-lg max-w-none blog-post">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-xl font-bold text-lawyer-navy mb-2">About the Author</h3>
                  <div className="flex items-center">
                    <img 
                      src="/lovable-uploads/96b51200-5773-42b6-ad91-3ba7c7d42bd0.png" 
                      alt="Muhammad Obaid" 
                      className="w-12 h-12 rounded-full object-cover mr-3"
                    />
                    <div>
                      <p className="font-bold">Muhammad Obaid</p>
                      <p className="text-sm text-gray-600">Advocate at Calcutta High Court</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-lawyer-navy mb-3">Share This Article</h3>
                  <div className="flex space-x-4">
                    <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700">
                      f
                    </button>
                    <button className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500">
                      t
                    </button>
                    <button className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700">
                      w
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/blog" className="text-lawyer-navy font-medium inline-flex items-center group">
              <svg className="mr-2 w-4 h-4 transition-transform duration-300 group-hover:-translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to All Articles
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-lawyer-navy rounded-lg shadow-xl p-8 md:p-12 text-center opacity-0 reveal">
            <h2 className="text-3xl font-bold text-white mb-6">Need Legal Assistance in Kolkata or Howrah?</h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8">
              If you have questions about a legal issue discussed in this article or need representation in a similar matter, contact me for professional assistance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <ConsultationButton />
              <Link to="/contact" className="btn-secondary">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
