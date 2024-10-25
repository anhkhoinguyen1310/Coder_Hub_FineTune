import './App.css';
import React, { useEffect, useState } from 'react';
import NaviBar from './components/NaviBar';
import { quantum } from 'ldrs';

quantum.register();

function App() {
  const [searchTerm, setsearchTerm] = useState('');
  const [pageNumber, setpageNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [readme, setReadme] = useState(null);
  const [repo, setRepo] = useState([]);
  const [user, setUser] = useState('');
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  console.log({ searchTerm });

  // In App.js
  const onSearchCoderHub = async (e, page) => {
    if (e && e.preventDefault) {
      e.preventDefault();
      // This is a new search, reset pageNumber
      setReadme(null);
      setRepo([]);
      setUser([]);
      page = 1; // Start from the first page for new searches
      window.history.pushState({}, '', '/'); // Reset the URL to root
      setCurrentPath('/'); // Update currentPath state
    }

    const currentPage = page || pageNumber;

    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${encodeURIComponent(searchTerm)}&page=${currentPage}`
      );
      const data = await response.json();
      setRepo(data.items || []);
      setpageNumber(currentPage); // Update the pageNumber state
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
    setIsLoading(false);
  };



  const fetchReadMe = async () => {
    try {
      const pathSegments = window.location.pathname.split('/').filter(Boolean);
      const pathLength = pathSegments.length;
      const owner = pathSegments[pathLength - 2];
      const repoName = pathSegments[pathLength - 1];

      if (!owner || !repoName) {
        console.error('Owner or repository name is missing in the URL.');
        return;
      }

      const response = await fetch(`https://api.github.com/repos/${owner}/${repoName}/readme`);
      if (!response.ok) {
        throw new Error(`Failed to fetch README: ${response.statusText}`);
      }

      const data = await response.json();
      if (data.content) {
        const decodedContent = atob(data.content.replace(/\n/g, ''));
        console.log({ data }, { decodedContent });
        setReadme(decodedContent);
      } else {
        console.error('No content found in README response');
      }
    } catch (error) {
      console.error('Error fetching README:', error);
    }
  };

  const fetchUser = async () => {
    const response = await fetch(`https://api.github.com/search/users?q=${encodeURIComponent(searchTerm)}`);
    const data = await response.json();
    console.log('User: ', { data });
    setUser(data.items);
  };

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);

    const pathSegments = window.location.pathname.split('/').filter(Boolean);

    if (pathSegments.length > 2) {
      // Reset to root if too many segments
      window.history.replaceState({}, '', '/');
      setCurrentPath('/');
    } else if (pathSegments.length === 2) {
      fetchReadMe();
    }

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  useEffect(() => {
    if (currentPath.length > 1) {
      fetchReadMe();
    }
  }, [currentPath]);

  if (isLoading) {
    return (
      <div className="loader-container">
        {React.createElement('l-quantum', {
          size: '60',
          speed: '1.5',
          color: 'black',
        })}
      </div>
    );
  }

  return (
    <div>

      <NaviBar
        onSearchCoderHub={onSearchCoderHub}
        fetchUser={fetchUser}
        setsearchTerm={setsearchTerm}
        setpageNumber={setpageNumber}
        repo={repo}
        pageNumber={pageNumber}
        readme={readme}
        user={user}
        handleRepoClick={(owner, repoName) => {
          window.history.pushState({}, '', `/${owner}/${repoName}`);
          setCurrentPath(`/${owner}/${repoName}`);
        }}
      />
    </div>
  );
}

export default App;
