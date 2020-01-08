export function Base(options: { id: string }) {
  return (target: any) => { target.id = options.id }
}

export function generate() {
  return `#${Math.floor(Math.random()*16777215).toString(16)}`
}

