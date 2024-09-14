import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function MyWork() {
  const [activeCategory, setActiveCategory] = useState('feature');
  const [maxHeight, setMaxHeight] = useState(0);
  const scrollContainerRef = useRef(null);
  const projectRefs = useRef([]);

  const categories = [
    { id: 'feature', name: 'Features' },
    { id: 'magazine', name: 'Magazines' },
    { id: 'news', name: 'News' },
    { id: 'thesis', name: 'Thesis' }
  ];

  // Projects array without hardcoded IDs
  const projects = [
    {
      title: "Orbango’s edgy bottle",
      excerpt: "When Orbango, a Mumbai-based juice bar, decided to sell its product in customised packaging, designer Jigna Shah Oza, ...",
      category: "feature",
      imageUrl: process.env.PUBLIC_URL + '../images/2-7f2dd5cb.jpg',
      externalUrl: "https://www.printweek.in/features/orbangos-edgy-bottle-41184"
    },

    {
      title: "Football’s popularity, cardiac safety awareness opportunity",
      excerpt: "  Medics see football as chance to educate on heart problems",
      category: "feature",
      imageUrl: process.env.PUBLIC_URL + '../images/Gemini_Generated_Image_yezhluyezhluyezh.jpeg',
      pdfUrl: `${process.env.PUBLIC_URL}../pdfs/Features/Football’s popularity, cardiac safety awareness opportunity.pdf`
    },
    {
      title: "The new OOH regulations and what needs to be done",
      excerpt: "The Municipal Corporation of Greater Mumbai has proposed a series of changes in the new outdoor advertising regulation that focus on safety, minimizing hazardous materials, and promoting eco-friendly solutions...",
      category: "feature",
      imageUrl: process.env.PUBLIC_URL + '../images/Screenshot 2024-09-13 at 01-43-28 Global 5 Technologiess highlights its premium product range at Media Expo PrintWeek - Writing Samples OOH.pdf.png',
      pdfUrl: `${process.env.PUBLIC_URL}../pdfs/Writing Samples OOH.pdf`
    },
    {
      title: "The plastic conundrum",
      excerpt: "Lets discuss the challenges and opportunities in achieving a circular economy for plastics in India. It highlights initiatives by companies like HUL and Nestle to increase the use of recycled plastics...",
      category: "feature",
      imageUrl: process.env.PUBLIC_URL + '../images/Screenshot 2024-09-13 at 01-44-00 The plastic conundrum - The plastic conundrum .pdf.png',
      pdfUrl: `${process.env.PUBLIC_URL}../pdfs/Features/The plastic conundrum .pdf`

    },

    {
      title: "FMCG, spending and the pandemic",
      excerpt: "The report by the World Advertising Research Center (WARC) explores the impact of the COVID-19 pandemic on the FMCG industry, highlighting a probable short-term recession and advertising downturn...", // Truncated
      category: "feature",
      imageUrl: process.env.PUBLIC_URL + '../images/Screenshot 2024-09-13 at 01-44-17 Sesa’s brand revamp with a new packaging outlook PrintWeek - Writing Sample Warc.pdf.png',
      pdfUrl: `${process.env.PUBLIC_URL}../pdfs/Features/Writing Sample Warc.pdf`
    },

    {
      title: "Why we need to be serious about sustainability...",
      excerpt: "What packaging? magazine June 2021 edition with the latest packaging, printing and converting updates",
      category: "magazine",
      imageUrl: process.env.PUBLIC_URL + '../images/Screenshot 2024-09-13 at 01-40-49 Writing sample 2.pdf.png',
      pdfUrl: `${process.env.PUBLIC_URL}../pdfs/Magazines/Writing sample 2.pdf`
    },
    {
      title: "Reusing nature’s own packaging",
      excerpt: "What packaging? magazine April 2020 edition with the latest packaging, printing and converting updates", // Truncated
      category: "magazine",
      imageUrl: process.env.PUBLIC_URL + '../images/Screenshot 2024-09-13 at 01-40-17 Writing Sample 1.pdf.png',
      pdfUrl: `${process.env.PUBLIC_URL}../pdfs/Magazines/Writing Sample 1.pdf`
    },
    {
      title: "Bizongo raises USD 30 million in Series C funding",
      excerpt: "Series C funding will be used to enhance Bizongo's technology platform, expand into new sectors, and increase its reach across India.",
      category: "news",
      imageUrl: process.env.PUBLIC_URL + '../images/1-bfa0125a.jpg',
      pdfUrl: `${process.env.PUBLIC_URL}../pdfs/News/Writing sample bizongo.pdf`
    },
    {
      title: "HCCB collects 30,000 kg plastics under new campaign",
      excerpt: "'Plastic Lao, Thaila Pao' campaign employs a barter system to encourage plastic waste collection and recycling.",
      category: "news",
      imageUrl: process.env.PUBLIC_URL + '../images/4-bfa0125a.jpg',
      pdfUrl: `${process.env.PUBLIC_URL}../pdfs/News/Writing Sample HCCB.pdf`
    },
    {
      title: "PepsiCo India achieves 100% PET recycling in Maharashtra",
      excerpt: "The 100% PET recycling milestone in Maharashtra involved collaboration with 10,000 waste pickers and support from the state government.",
      category: "news",
      imageUrl: process.env.PUBLIC_URL + '../images/3-bfa0125a.jpg',
      pdfUrl: `${process.env.PUBLIC_URL}../pdfs/News/Writing Samples Pespisco.pdf`
    },
    {
      title: "Cosmo Films reports profit of Rs 113 crores for FY20",
      excerpt: "The company anticipates increased demand for flexible packaging due to changing consumer preferences and hygiene concerns following the COVID-19 pandemic.",
      category: "news",
      imageUrl: process.env.PUBLIC_URL + '../images/1-7f2dd5cb.jpg',
      pdfUrl: `${process.env.PUBLIC_URL}../pdfs/News/Writing Sample Cosmo films.pdf`
    },
    {
      title: "ITC to acquire Sunrise Foods",
      excerpt: "Acquisition of Sunrise Foods aligns with ITC's strategy to expand its FMCG business and leverage its distribution network.",
      category: "news",
      imageUrl: process.env.PUBLIC_URL + '../images/2-bfa0125a.jpg',
      pdfUrl: `${process.env.PUBLIC_URL}../pdfs/News/Writing Sample ITC.pdf`
    },
    {
      title: "Xerox acquires Digitex Canada",
      excerpt: "The acquisition of Digitex Canada strengthens Xerox's position in the North American SMB market and expands its geographical reach.",
      category: "news",
      imageUrl: process.env.PUBLIC_URL + '../images/4-eaf5edaa.jpg',
      pdfUrl: `${process.env.PUBLIC_URL}../pdfs/News/writng sample xerox.pdf`
    },
    {
      title: "Shrinath Flexipack to set up Rs 113,75 cr factory in Abu Dhabi",
      excerpt: "This new factory in Abu Dhabi will enable Shrinath Flexipack to better serve clients in the Middle East, Africa, and Europe.",
      category: "news",
      imageUrl: process.env.PUBLIC_URL + '../images/3-eaf5edaa.jpg',
      pdfUrl: `${process.env.PUBLIC_URL}../pdfs/News/Writing Sample Shrinath Flexipack.pdf`
    },
    {
      title: "Serum Institute buys 50% stake in Schott Kaisha",
      excerpt: "Strategic partnership with Schott Kaisha aims to secure the supply of high-quality pharma packaging to meet the rising global demand.",
      category: "news",
      imageUrl: process.env.PUBLIC_URL + '../images/1-eaf5edaa.jpg',
      pdfUrl: `${process.env.PUBLIC_URL}../pdfs/News/writing sample serum.pdf`
    },
    {
      title: "Nestle to create market for food-grade recycled plastics",
      excerpt: "The substantial investment will be used to promote the use of food-grade recycled plastics and support the development of sustainable packaging solutions.",
      category: "news",
      imageUrl: process.env.PUBLIC_URL + '../images/2-eaf5edaa.jpg',
      pdfUrl: `${process.env.PUBLIC_URL}../pdfs/News/wrting sample nestle.pdf`
    },
    {
      title: "Sudden Cardiac Death and Sports",
      excerpt: "A matter of public health",
      category: "thesis",
      imageUrl: process.env.PUBLIC_URL + '../images/Gemini_Generated_Image_q6i6pmq6i6pmq6i6.jpeg',
      pdfUrl: `${process.env.PUBLIC_URL}../pdfs/Thesis/DOC-20230110-WA0003..pdf`
    },


  ];

  const filteredProjects = projects.filter(project => project.category === activeCategory);

  const shouldScroll = filteredProjects.length > 3;

  useEffect(() => {
    const updateMaxHeight = () => {
      const heights = projectRefs.current.map(ref => ref?.offsetHeight || 0);
      setMaxHeight(Math.max(...heights));
    };

    updateMaxHeight();
    window.addEventListener('resize', updateMaxHeight);
    return () => window.removeEventListener('resize', updateMaxHeight);
  }, [filteredProjects]);

  const handleWheel = (e) => {
    if (!shouldScroll) return;
    e.preventDefault();
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollLeft += e.deltaY;
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container && shouldScroll) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, [shouldScroll]);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth;
      container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="my-work container mx-auto px-4 py-16">
      <div className="category-filter mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition duration-300 ${activeCategory === category.id
                ? 'bg-primary text-white'
                : 'bg-gray-200 hover:bg-primary hover:text-white'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div
          ref={scrollContainerRef}
          className={`projects-container ${shouldScroll
            ? 'flex overflow-x-auto snap-x snap-mandatory scrollbar-hide'
            : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'
            }`}
          style={{
            scrollBehavior: 'smooth',
            paddingBottom: '1rem',
            overflowY: 'hidden'
          }}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={el => projectRefs.current[index] = el}
              className={`project-card bg-white rounded-lg shadow-md overflow-hidden ${shouldScroll ? 'flex-none w-[calc(33.333%-16px)] mx-2 snap-start' : ''
                }`}
              style={{
                height: shouldScroll ? 'auto' : `${maxHeight}px`,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-auto object-contain" // Change object-cover to object-contain
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{project.excerpt}</p>
                {project.externalUrl ? (
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline mt-auto"
                  >
                    Read More
                  </a>
                ) : project.pdfUrl ? (
                  <a
                    href={project.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline mt-auto"
                  >
                    Read More
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {shouldScroll && (
          <div className="flex justify-center mt-4 space-x-4">
            <button
              onClick={() => scroll(-1)}
              className="bg-white p-2 rounded-full shadow-md"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll(1)}
              className="bg-white p-2 rounded-full shadow-md"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyWork;
