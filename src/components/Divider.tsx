type DividerProps = {
text?: string;
};

export default function Divider({ text = "Hardware. Innovation. Future." }: DividerProps) {
return (
	<span className="flex items-center">
	<span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-600"></span>
	<span className="shrink-0 px-4 text-white">{text}</span>
	<span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-600"></span>
	</span>
);
}
  