import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent } from "./ui/dialog";
import { Input } from "./ui/input";
import { useNavigate } from "react-router-dom";
import { serviceDetails } from "../data/services";

// Build a flat list of all services and subcategories for search
const allSearchItems = [
  // Services
  ...serviceDetails.map(service => ({
    id: service.id,
    title: service.title,
    url: `/services/${service.slug}`,
    type: "service",
    category: service.category
  })),
  // Subcategories
  ...serviceDetails.flatMap(service =>
    (service.subcategories || []).map(subcat => ({
      id: `${service.id}--${subcat.id}`,
      title: subcat.title,
      url: `/services/${service.slug}#${subcat.slug}`,
      type: "subcategory",
      category: service.category
    }))
  )
];

export function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof allSearchItems>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Handle keyboard shortcut to open search (Cmd+K or Ctrl+K)
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (open && inputRef.current) {
      // Focus the input when modal opens
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  // Search functionality
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    // Search all services and subcategories
    const filtered = allSearchItems.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    
    setResults(filtered);
    
    // In a real app, you would implement debounced API calls here
  }, [query]);

  const handleResultClick = (url: string) => {
    setOpen(false);
    setQuery("");
    
    if (url.startsWith("/#")) {
      // Handle anchor links
      const element = document.querySelector(url.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        // Update URL without page reload
        window.history.pushState({}, "", url);
      }
    } else {
      // Handle regular page navigation
      navigate(url);
    }
  };

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2 border border-gray-200 dark:border-gray-800"
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4 xl:mr-2" aria-hidden="true" />
        <span className="hidden xl:inline-flex">Search...</span>
        <span className="sr-only">Search</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 xl:flex">
          <abbr title="Command" className="no-underline">⌘</abbr>K
        </kbd>
      </Button>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-xl p-0 gap-0">
          <div className="flex items-center border-b px-3">
            <Search className="h-5 w-5 text-muted-foreground mr-2" />
            <Input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for anything..."
              className="flex h-12 w-full rounded-md border-0 bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            />
            {query && (
              <X 
                className="h-5 w-5 text-muted-foreground cursor-pointer" 
                onClick={() => setQuery("")}
              />
            )}
          </div>
          
          {results.length > 0 && (
            <div className="max-h-96 overflow-y-auto p-4">
              <h3 className="text-sm font-semibold text-muted-foreground mb-2">Results</h3>
              <div className="space-y-1">
                {results.map((result) => (
                  <div
                    key={result.id}
                    onClick={() => handleResultClick(result.url)}
                    className="cursor-pointer flex items-center rounded-md p-2 hover:bg-accent"
                  >
                    <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <Search className="h-4 w-4 text-primary" />
                    </div>
                    <div>{result.title}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {query && results.length === 0 && (
            <div className="p-8 text-center">
              <p className="text-muted-foreground">No results found</p>
            </div>
          )}
          
          {!query && (
            <div className="p-4 mt-4">
              <p className="text-sm text-muted-foreground">Try searching for services, pages, blog posts, or help articles</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
