projects = [
    ("unc-mri", 4, "UncMri"),
    ("first-presbyterian", 18, "FirstPres"),
    ("culp-showroom", 20, "Culp"),
    ("natty-greenes", 9, "Natty"),
    ("te-connectivity", 8, "Te"),
    ("joymongers-gso", 19, "Joymongers"),
    ("childrens-museum", 47, "Childrens"),
    ("harley-davidson-gso", 69, "Harley")
]

imports = ""
arrays = {}

for slug, count, prefix in projects:
    # imports
    for i in range(1, count + 1):
        var_name = f"{prefix}Gallery{i}"
        file_name = f"{slug}-gallery-{i}.jpg"
        imports += f"import {var_name} from '../assets/images/projects/{file_name}';\n"
    
    # array items
    items = []
    for i in range(1, count + 1):
        items.append(f"{prefix}Gallery{i}")
    arrays[slug] = ", ".join(items)

print("---IMPORTS---")
print(imports)
print("---ARRAYS---")
for slug, item_str in arrays.items():
    print(f"{slug}: [{item_str}]")
