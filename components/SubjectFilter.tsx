import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { subjects } from "@/constants"

const SubjectFilter = () => {
  return (
    <Select>
     <SelectTrigger className="input capitalize">
        <SelectValue placeholder="Subject" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All subjects</SelectItem>
        {subjects.map((subject) => (
          <SelectItem
          key={subject}
            value={subject}
            className="capitalize"
          >
            {subject}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>

  )
}

export default SubjectFilter
