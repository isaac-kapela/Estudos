class Animal
  def pular
    puts 'Toing! tóim! bóim! póim!'
  end

  def dormir
    puts 'ZzZzzz!'
  end

end

# essa classe herda os metodos da classe Animal
class Cachorro < Animal
  def latir
    puts 'Au Au'
  end
end

cachorro = Cachorro.new
cachorro.pular
 cachorro.dormir
cachorro.latir
