=begin
  loop over something
  inside the loop we are going to do something
  for(let item in array) {

  }
=end

num = 0

# while(num < 10) do
#   num += 1
#   puts "Hello world, num: #{num}"
# end

until (num > 10) do 
  num += 1
  puts "Hello world, num: #{num}"
end

names = ["Kevin", 'Andy', "Sarah"]
# names.pop()
# names.push("Evan")

# JS you have for..of, for...in, c-style loop
# for name in names do 
#   puts name
# end

# # names.forEach((name, idx, orgArr) => )
# names.each do |name, idx| 
#   puts name
#   puts idx
# end

names.each_with_index do |name, idx|
  puts name
  puts idx
end

puts 123.methods

# const names.map(() =>)
# names.map
# new_name = names.map

# "hello".toUpperCase()