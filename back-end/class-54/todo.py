# Define empty list
tasks = []

while True:
    print("\n1. Add Task")
    print("2. View tasks")
    print("3. Remove task")
    print("4. Exit")

    choice = input("Choose an option: ")

    if choice == "1":
        task = input("Enter task: ")
        tasks.append(task)
    elif choice == "2":
        print("-" * 15)
        print("Tasks")
        print("-" * 15)
        for task in tasks:
            print(task)
        print("-" * 15)
    elif choice == "3":
        if tasks:
            for item, task in enumerate(tasks):
                print(f"{item}: {task}")
            selector = int(input("Choose a task to delete"))

            if selector <= len(tasks):
                tasks.pop(selector)
            else:
                print(f"Item {selector} out of range, try again.")
        else:
            print("No tasks to remove.")
    elif choice == "4":
        break
    else:
        "Please enter a valid choice..."
    