import { Button } from "lib/components/ui/button"
import { PlayIcon } from "lucide-react"

const PreviewEmptyState = ({ onRunClicked }: { onRunClicked: () => void }) => (
  <div className="flex items-center gap-3 bg-gray-100 text-center justify-center py-10">
    No circuit json loaded
    <Button className="bg-blue-600 hover:bg-blue-500" onClick={onRunClicked}>
      Run Code
      <PlayIcon className="w-3 h-3 ml-2" />
    </Button>
  </div>
)

export default PreviewEmptyState
