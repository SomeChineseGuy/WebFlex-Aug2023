# Private, read only, write only, read and write only

class Car 
  # constructor
  def initialize make, model, year
    # this.make = make
    @make = make
    @model = model
    @year = year
  end

  attr_accessor :make, :year, :model
  # attr_reader :year
  # attr_reader :model
  # attr_reader :make

  # attr_writer :make
  # attr_writer :model
  # attr_writer :year

  
  # attr_accessor :year
  # attr_accessor :model


  def show_year 
    puts @year
    sum(10, 10)
  end

  Private

  def sum num1, num2 
    num1 + num2
  end
end

my_car = Car.new('Honda', 'CRV', 2002)

p my_car.sum(10, 10)

my_car.year = 2020

p my_car.year

