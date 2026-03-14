import Link from 'next/link'

export default function TasksPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Tasks</h1>
        <Link href="/dashboard/tasks/new" className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          New Task
        </Link>
      </div>
      <p>Tasks module ready. Connect to API soon.</p>
    </div>
  )
}
