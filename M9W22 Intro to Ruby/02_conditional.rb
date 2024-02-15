num = 1

if num >  10
  puts "Hello!"
elsif (num == 5)
  puts "The number is 5"
else
  p "The number is something we don't know!"
end

# && ||
# def say_hello
#   name = 'alvin'
# end

# false
# nil

email = 10 > 11

# if (!email || !password)
#   puts "Please write email and password"
# end

# unless (email && password) 
#   "Please write your email or password"
# end

puts email ? "You have an email" : "We need an email"