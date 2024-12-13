story = """
Once upon a time, there was a {adjective} {noun} who loved to {verb} in the {place}. One day, they found a {color} {object} and became very {emotion}.
"""

words = {
    "adjective": input("enter adjective: "),
    "noun": input("enter noun: "),
    "verb": input("enter verb: "),
    "place": input("enter place: "),
    "color": input("enter color: "),
    "object": input("enter object: "),
    "emotion": input("enter emotion: ")
}

print(story.format(**words))